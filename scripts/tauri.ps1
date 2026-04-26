param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('dev', 'build')]
  [string]$Command
)

$ErrorActionPreference = 'Stop'

$vswhere = Join-Path ${env:ProgramFiles(x86)} 'Microsoft Visual Studio\Installer\vswhere.exe'
if (!(Test-Path -LiteralPath $vswhere)) {
  throw 'Visual Studio Installer was not found. Install Microsoft C++ Build Tools before running Tauri.'
}

$vsInstallPath = & $vswhere -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath
if (!$vsInstallPath) {
  throw 'Microsoft C++ Build Tools were not found. Install the Desktop development with C++ workload before running Tauri.'
}

$vsDevCmd = Join-Path $vsInstallPath 'Common7\Tools\VsDevCmd.bat'
if (!(Test-Path -LiteralPath $vsDevCmd)) {
  throw "VsDevCmd.bat was not found at $vsDevCmd."
}

if ($Command -eq 'build') {
  & "$PSScriptRoot\..\node_modules\.bin\vite.cmd" build
  if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
  }
}

$cmd = "call `"$vsDevCmd`" -arch=x64 -host_arch=x64 && npm.cmd exec tauri -- $Command"
cmd.exe /d /s /c $cmd
exit $LASTEXITCODE
