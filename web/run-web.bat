@echo off
cd /d "%~dp0"

set NODE_OPTIONS=--use-system-ca

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)

echo Starting dev server...
call npm run dev
if errorlevel 1 goto :error

goto :eof

:error
echo.
echo Failed to start. Press any key to exit.
pause >nul
exit /b 1
