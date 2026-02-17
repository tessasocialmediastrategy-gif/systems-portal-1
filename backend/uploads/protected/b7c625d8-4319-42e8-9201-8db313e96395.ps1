# OnPoint — OneDrive Folder Builder (PowerShell)
# Usage:
# 1) Open PowerShell
# 2) cd to your OneDrive root folder (the folder that contains "OnPoint Authority Systems, Inc.")
# 3) Run:  .\OnPoint_OneDrive_Folder_Build_v2026-02-17r3.ps1

$root = "OnPoint Authority Systems, Inc."

$paths = @(
  "$root\00 MASTER CONTROL\REGISTRY",
  "$root\00 MASTER CONTROL\TEMPLATES",
  "$root\00 MASTER CONTROL\CHANGE LOGS",

  "$root\02 SYSTEMS BOOK\00 MASTER",
  "$root\02 SYSTEMS BOOK\01 DRAFTS",
  "$root\02 SYSTEMS BOOK\02 ASSETS",
  "$root\02 SYSTEMS BOOK\03 EXPORTS",
  "$root\02 SYSTEMS BOOK\REGISTRY",

  "$root\03 WEBSITE\00 IA & UX",
  "$root\03 WEBSITE\01 COPY BLOCKS",
  "$root\03 WEBSITE\02 PAGES",
  "$root\03 WEBSITE\03 ASSETS",
  "$root\03 WEBSITE\REGISTRY",

  "$root\04 CIM PROGRAM\01 TEASER\MASTER",
  "$root\04 CIM PROGRAM\01 TEASER\EXPORT",
  "$root\04 CIM PROGRAM\02 NDA\MASTER",
  "$root\04 CIM PROGRAM\02 NDA\EXPORT",
  "$root\04 CIM PROGRAM\03 CIM\MASTER",
  "$root\04 CIM PROGRAM\03 CIM\EXPORT",
  "$root\04 CIM PROGRAM\04 BUYER DECK\MASTER",
  "$root\04 CIM PROGRAM\04 BUYER DECK\EXPORT",
  "$root\04 CIM PROGRAM\05 APPENDIX PACK\MASTER",
  "$root\04 CIM PROGRAM\05 APPENDIX PACK\EXPORT",
  "$root\04 CIM PROGRAM\REGISTRY",

  "$root\05 DATA ROOM\00 INDEX",
  "$root\05 DATA ROOM\01 BUYER LISTS",
  "$root\05 DATA ROOM\02 NDAs",
  "$root\05 DATA ROOM\03 DISTRIBUTIONS",
  "$root\05 DATA ROOM\04 Q&A LOG"
)

foreach ($p in $paths) {
  if (-not (Test-Path -LiteralPath $p)) {
    New-Item -ItemType Directory -Path $p | Out-Null
    Write-Host "Created: $p"
  } else {
    Write-Host "Exists:   $p"
  }
}

Write-Host "`nDone. Next: place your MASTER files into the /MASTER folders, exports into /EXPORT, and keep registries in /REGISTRY."
