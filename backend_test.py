#!/usr/bin/env python3
"""
CIM Document Portal Backend API Test Suite
Tests all backend functionality including auth, document management, admin functions
"""

import requests
import sys
import json
import io
from datetime import datetime

class CIMPortalAPITester:
    def __init__(self, base_url="https://continue-build-4.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.admin_token = None
        self.buyer_token = None
        self.test_buyer_id = None
        self.test_doc_id = None
        self.tests_run = 0
        self.tests_passed = 0
        
        # Test credentials
        self.admin_email = "admin@tessaauthority.com"
        self.admin_password = "admin123"

    def log(self, message, level="INFO"):
        timestamp = datetime.now().strftime("%H:%M:%S")
        print(f"[{timestamp}] {level}: {message}")

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None, files=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        test_headers = {'Content-Type': 'application/json'}
        
        if headers:
            test_headers.update(headers)
        
        self.tests_run += 1
        self.log(f"Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                if files:
                    # Remove Content-Type for multipart
                    test_headers.pop('Content-Type', None)
                    response = requests.post(url, data=data, files=files, headers=test_headers, timeout=10)
                else:
                    response = requests.post(url, json=data, headers=test_headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                self.log(f"✅ PASSED - Status: {response.status_code}", "PASS")
                try:
                    return success, response.json()
                except:
                    return success, response.text
            else:
                self.log(f"❌ FAILED - Expected {expected_status}, got {response.status_code}", "FAIL")
                self.log(f"Response: {response.text[:200]}", "ERROR")
                return False, {}

        except Exception as e:
            self.log(f"❌ FAILED - Error: {str(e)}", "ERROR")
            return False, {}

    def test_health_check(self):
        """Test basic API connectivity"""
        self.log("=== Testing API Health ===")
        success, response = self.run_test("API Root", "GET", "", 200)
        if success:
            self.log(f"API Message: {response.get('message', 'N/A')}")
        
        self.run_test("Health Check", "GET", "health", 200)
        return success

    def test_admin_seeding(self):
        """Test admin account seeding"""
        self.log("=== Testing Admin Seeding ===")
        success, response = self.run_test("Seed Admin", "POST", "seed-admin", 200)
        if success:
            self.log(f"Admin seeding result: {response.get('message', 'N/A')}")
        return success

    def test_admin_login(self):
        """Test admin authentication"""
        self.log("=== Testing Admin Authentication ===")
        success, response = self.run_test(
            "Admin Login", 
            "POST", 
            "auth/login",
            200,
            data={"email": self.admin_email, "password": self.admin_password}
        )
        
        if success and 'access_token' in response:
            self.admin_token = response['access_token']
            self.log(f"Admin logged in successfully. Role: {response.get('user', {}).get('role')}")
            return True
        else:
            self.log("❌ Admin login failed - no token received", "ERROR")
            return False

    def test_admin_profile(self):
        """Test admin profile access"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Admin Profile ===")
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        success, response = self.run_test("Get Admin Profile", "GET", "auth/me", 200, headers=headers)
        
        if success:
            self.log(f"Admin profile: {response.get('name')} ({response.get('role')})")
        return success

    def test_invite_buyer(self):
        """Test buyer invitation"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Buyer Invitation ===")
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        test_time = datetime.now().strftime("%H%M%S")
        
        success, response = self.run_test(
            "Invite Buyer",
            "POST",
            "admin/invite",
            200,
            data={
                "email": f"testbuyer{test_time}@example.com",
                "name": f"Test Buyer {test_time}",
                "company": "Test Company"
            },
            headers=headers
        )
        
        if success and 'id' in response:
            self.test_buyer_id = response['id']
            self.test_buyer_email = response['email']
            self.test_buyer_password = response['temp_password']
            self.log(f"Buyer invited: {self.test_buyer_email} with temp password: {self.test_buyer_password}")
            return True
        return False

    def test_buyer_login(self):
        """Test buyer authentication"""
        if not hasattr(self, 'test_buyer_email'):
            self.log("❌ No test buyer available for login test", "ERROR")
            return False
            
        self.log("=== Testing Buyer Authentication ===")
        success, response = self.run_test(
            "Buyer Login",
            "POST",
            "auth/login",
            200,
            data={"email": self.test_buyer_email, "password": self.test_buyer_password}
        )
        
        if success and 'access_token' in response:
            self.buyer_token = response['access_token']
            user_role = response.get('user', {}).get('role')
            self.log(f"Buyer logged in successfully. Role: {user_role}")
            return True
        return False

    def test_document_upload(self):
        """Test document upload functionality"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Document Upload ===")
        
        # Create a test PDF file
        test_content = b"%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 44 >>\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(Test Document) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000206 00000 n \ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n299\n%%EOF"
        test_file = io.BytesIO(test_content)
        
        # Upload with query parameters and file
        upload_url = f"{self.api_url}/documents/upload?name=Test CIM Document&category=cim_modern&is_public=true&description=Test document for API testing&version=v2026-02-16r1"
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        files = {'file': ('test_document.pdf', test_file, 'application/pdf')}
        
        self.tests_run += 1
        self.log(f"Testing Upload Document...")
        
        try:
            response = requests.post(upload_url, files=files, headers=headers, timeout=10)
            success = response.status_code == 200
            
            if success:
                self.tests_passed += 1
                self.log(f"✅ PASSED - Status: {response.status_code}", "PASS")
                response_data = response.json()
                if 'id' in response_data:
                    self.test_doc_id = response_data['id']
                    self.log(f"Document uploaded successfully. ID: {self.test_doc_id}")
                    return True
            else:
                self.log(f"❌ FAILED - Expected 200, got {response.status_code}", "FAIL")
                self.log(f"Response: {response.text[:200]}", "ERROR")
                return False
                
        except Exception as e:
            self.log(f"❌ FAILED - Error: {str(e)}", "ERROR")
            return False

    def test_public_documents(self):
        """Test public document listing"""
        self.log("=== Testing Public Documents ===")
        success, response = self.run_test("Get Public Documents", "GET", "documents/public", 200)
        
        if success:
            doc_count = len(response) if isinstance(response, list) else 0
            self.log(f"Found {doc_count} public documents")
            return True
        return False

    def test_protected_documents(self):
        """Test protected document access"""
        if not self.buyer_token:
            return False
            
        self.log("=== Testing Protected Documents ===")
        headers = {"Authorization": f"Bearer {self.buyer_token}"}
        success, response = self.run_test("Get Protected Documents", "GET", "documents/protected", 200, headers=headers)
        
        if success:
            doc_count = len(response) if isinstance(response, list) else 0
            self.log(f"Buyer can access {doc_count} protected documents")
            return True
        return False

    def test_admin_stats(self):
        """Test admin statistics"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Admin Stats ===")
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        success, response = self.run_test("Get Stats", "GET", "stats", 200, headers=headers)
        
        if success:
            self.log(f"Stats - Buyers: {response.get('total_buyers', 0)}, Docs: {response.get('total_documents', 0)}, Downloads: {response.get('total_downloads', 0)}")
            return True
        return False

    def test_admin_users_list(self):
        """Test admin user management"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Admin User Management ===")
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        success, response = self.run_test("List Users", "GET", "admin/users", 200, headers=headers)
        
        if success:
            user_count = len(response) if isinstance(response, list) else 0
            self.log(f"Admin can see {user_count} users")
            return True
        return False

    def test_download_logs(self):
        """Test download tracking"""
        if not self.admin_token:
            return False
            
        self.log("=== Testing Download Logs ===")
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        success, response = self.run_test("Get Download Logs", "GET", "admin/downloads", 200, headers=headers)
        
        if success:
            log_count = len(response) if isinstance(response, list) else 0
            self.log(f"Found {log_count} download log entries")
            return True
        return False

    def test_public_download(self):
        """Test public document download"""
        if not self.test_doc_id:
            self.log("❌ No test document available for download test", "ERROR")
            return False
            
        self.log("=== Testing Public Download ===")
        success, response = self.run_test("Download Public Document", "GET", f"downloads/public/{self.test_doc_id}", 200)
        return success

    def test_protected_download_without_auth(self):
        """Test protected download requires authentication"""
        if not self.test_doc_id:
            return False
            
        self.log("=== Testing Protected Download Security ===")
        # This should fail with 401/403
        success, response = self.run_test("Protected Download (No Auth)", "GET", f"downloads/protected/{self.test_doc_id}", 401)
        return success

    def run_all_tests(self):
        """Run the complete test suite"""
        self.log("🚀 Starting CIM Portal API Test Suite")
        self.log(f"Testing against: {self.base_url}")
        
        test_results = {}
        
        # Basic connectivity
        test_results['health'] = self.test_health_check()
        
        # Admin setup and auth
        test_results['admin_seed'] = self.test_admin_seeding()
        test_results['admin_login'] = self.test_admin_login()
        test_results['admin_profile'] = self.test_admin_profile()
        
        # User management
        test_results['invite_buyer'] = self.test_invite_buyer()
        test_results['buyer_login'] = self.test_buyer_login()
        test_results['admin_users'] = self.test_admin_users_list()
        
        # Document management
        test_results['doc_upload'] = self.test_document_upload()
        test_results['public_docs'] = self.test_public_documents()
        test_results['protected_docs'] = self.test_protected_documents()
        
        # Downloads and tracking
        test_results['public_download'] = self.test_public_download()
        test_results['protected_auth'] = self.test_protected_download_without_auth()
        test_results['download_logs'] = self.test_download_logs()
        
        # Admin features
        test_results['admin_stats'] = self.test_admin_stats()
        
        # Print final results
        self.log("=" * 50)
        self.log(f"📊 FINAL RESULTS: {self.tests_passed}/{self.tests_run} tests passed")
        self.log("=" * 50)
        
        failed_tests = [test for test, result in test_results.items() if not result]
        if failed_tests:
            self.log(f"❌ Failed tests: {', '.join(failed_tests)}", "ERROR")
        else:
            self.log("🎉 All tests passed!", "SUCCESS")
            
        return self.tests_passed == self.tests_run, test_results

if __name__ == "__main__":
    tester = CIMPortalAPITester()
    success, results = tester.run_all_tests()
    sys.exit(0 if success else 1)