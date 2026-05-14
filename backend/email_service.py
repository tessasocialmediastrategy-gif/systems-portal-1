"""Resend-backed transactional email service.

Gracefully no-ops if RESEND_API_KEY is not configured, so the application
keeps functioning until the key is toggled on via Emergent Secret Manager.
"""
import asyncio
import logging
import os
from typing import Optional

import resend

logger = logging.getLogger(__name__)

# Module-level configuration — read at import time. server.py calls load_dotenv()
# first, so by the time this module imports these are populated.
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
RESEND_FROM_EMAIL = os.environ.get("RESEND_FROM_EMAIL", "").strip()
RESEND_MONITORING_EMAIL = os.environ.get("RESEND_MONITORING_EMAIL", "").strip()

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY


def is_configured() -> bool:
    return bool(RESEND_API_KEY and RESEND_FROM_EMAIL)


async def send_email(
    to: str,
    subject: str,
    html: str,
    reply_to: Optional[str] = None,
) -> Optional[str]:
    """Send a single transactional email. Returns email id or None on failure.

    Never raises — failures are logged so calling endpoints stay healthy.
    """
    if not is_configured():
        logger.info("Resend not configured — skipping email to %s (%s)", to, subject)
        return None

    params = {
        "from": RESEND_FROM_EMAIL,
        "to": [to],
        "subject": subject,
        "html": html,
    }
    if reply_to:
        params["reply_to"] = reply_to

    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        email_id = result.get("id") if isinstance(result, dict) else None
        logger.info("Resend dispatched to %s: %s", to, email_id)
        return email_id
    except Exception as exc:  # noqa: BLE001
        logger.error("Resend send failed for %s: %s", to, exc)
        return None


# ============== Branded Templates ==============

_FOOTER_HTML = """
<tr>
  <td style="padding:24px 32px;background:#000000;border-top:1px solid #1f1f1f;">
    <p style="margin:0;font-family:Georgia,serif;font-size:11px;color:#666666;letter-spacing:1px;text-transform:uppercase;">
      OnPoint Authority Systems, Inc.<sup style="color:#C5A059;">&trade;</sup>
    </p>
    <p style="margin:6px 0 0;font-family:Georgia,serif;font-size:11px;color:#444444;">
      USPTO S/N 99653409 &middot; OPAS Authority OS&trade; S/N 99748939
    </p>
    <p style="margin:12px 0 0;font-family:Georgia,serif;font-size:10px;color:#3a3a3a;letter-spacing:1px;">
      CHARLOTTE &middot; NEW YORK &middot; LONDON
    </p>
  </td>
</tr>
"""


def _shell(title: str, body_html: str) -> str:
    """Wrap content in the institutional dark-theme email shell."""
    return f"""<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#050505;font-family:Georgia,serif;color:#e5e5e5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#050505;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#0a0a0a;border:1px solid #1f1f1f;">
        <tr>
          <td style="padding:32px 32px 8px;border-bottom:1px solid #1a1a1a;">
            <p style="margin:0;font-family:Georgia,serif;font-size:11px;color:#C5A059;letter-spacing:3px;text-transform:uppercase;">OnPoint Authority Systems</p>
            <p style="margin:6px 0 0;font-family:Georgia,serif;font-size:10px;color:#555;letter-spacing:2px;text-transform:uppercase;">The Agentic Shift &middot; GOLD Campaign</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:24px;line-height:1.3;color:#ffffff;font-weight:normal;">{title}</h1>
            {body_html}
          </td>
        </tr>
        {_FOOTER_HTML}
      </table>
    </td></tr>
  </table>
</body></html>"""


def render_priority_access_ack(name: str, institution: str) -> str:
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">Dear {name or 'Operator'},</p>
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">
      Your <strong style="color:#C5A059;">Priority Access</strong> registration has been received and routed to our
      institutional strategy desk. A member of our team will be in touch within
      <strong style="color:#ffffff;">24 hours</strong> to align on next steps.
    </p>
    <p style="margin:0 0 24px;color:#cfcfcf;font-size:15px;line-height:1.7;">
      In the interim, your Agent Identity Signature has been cryptographically logged against
      institution: <em style="color:#C5A059;">{institution or 'pending verification'}</em>.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:16px 0 24px;">
      <tr><td style="padding:14px 22px;background:linear-gradient(90deg,#C5A059,#D4AF6A);">
        <span style="font-family:Arial,sans-serif;font-size:12px;color:#050505;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Priority Access Confirmed</span>
      </td></tr>
    </table>
    <p style="margin:0;color:#777;font-size:12px;line-height:1.6;">
      This message confirms receipt of your submission and is protected under institutional NDA.
      SOC-2 compliant data handling. Reference logged in OPAS Authority OS&trade;.
    </p>
    """
    return _shell("Priority Access Confirmed", body)


def render_priority_access_internal(submission: dict) -> str:
    rows = "".join(
        f'<tr><td style="padding:6px 0;color:#777;font-size:12px;width:140px;text-transform:uppercase;letter-spacing:1px;">{k}</td>'
        f'<td style="padding:6px 0;color:#e5e5e5;font-size:14px;">{v or "—"}</td></tr>'
        for k, v in submission.items()
    )
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:14px;line-height:1.7;">A new Priority Access submission has been recorded.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;border:1px solid #1f1f1f;padding:16px;">
      <tr><td style="padding:16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">{rows}</table>
      </td></tr>
    </table>
    <p style="margin:20px 0 0;color:#777;font-size:12px;">Review in the Admin Dashboard &rsaquo; Submissions tab.</p>
    """
    return _shell("New Priority Access Submission", body)


def render_nda_ack(name: str) -> str:
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">Dear {name or 'Reviewer'},</p>
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">
      Your <strong style="color:#C5A059;">NDA request</strong> has been received. Our deal team will review your
      qualification and dispatch the NDA for electronic signature within
      <strong style="color:#ffffff;">24&ndash;48 hours</strong>.
    </p>
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">
      Once signed, you&rsquo;ll receive credentials for the protected data room — CIM, Buyer Deck, Appendix Pack, and supporting materials.
    </p>
    <p style="margin:0;color:#777;font-size:12px;line-height:1.6;">
      All correspondence is governed by institutional confidentiality protocols.
    </p>
    """
    return _shell("NDA Request Received", body)


def render_nda_internal(submission: dict) -> str:
    rows = "".join(
        f'<tr><td style="padding:6px 0;color:#777;font-size:12px;width:140px;text-transform:uppercase;letter-spacing:1px;">{k}</td>'
        f'<td style="padding:6px 0;color:#e5e5e5;font-size:14px;">{v or "—"}</td></tr>'
        for k, v in submission.items()
    )
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:14px;line-height:1.7;">A new NDA request has been submitted via the investor portal.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;border:1px solid #1f1f1f;padding:16px;">
      <tr><td style="padding:16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">{rows}</table>
      </td></tr>
    </table>
    <p style="margin:20px 0 0;color:#777;font-size:12px;">Action required: review qualification, dispatch NDA.</p>
    """
    return _shell("New NDA Request", body)


def render_contact_ack(name: str) -> str:
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">Dear {name or 'Friend'},</p>
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.7;">
      Thank you for reaching out to OnPoint Authority Systems. Your message has been routed to the appropriate desk and we&rsquo;ll respond shortly.
    </p>
    <p style="margin:0;color:#777;font-size:12px;line-height:1.6;">
      For urgent institutional matters, reply directly to this email.
    </p>
    """
    return _shell("Thank you for reaching out", body)


def render_contact_internal(submission: dict) -> str:
    rows = "".join(
        f'<tr><td style="padding:6px 0;color:#777;font-size:12px;width:120px;text-transform:uppercase;letter-spacing:1px;">{k}</td>'
        f'<td style="padding:6px 0;color:#e5e5e5;font-size:14px;">{v or "—"}</td></tr>'
        for k, v in submission.items()
    )
    body = f"""
    <p style="margin:0 0 16px;color:#cfcfcf;font-size:14px;line-height:1.7;">A new contact form submission has arrived.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border:1px solid #1f1f1f;">
      <tr><td style="padding:16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">{rows}</table>
      </td></tr>
    </table>
    """
    return _shell("New Contact Submission", body)
