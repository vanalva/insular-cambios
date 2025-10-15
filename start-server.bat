@echo off
echo Starting Insular Website Server...
echo.
cd /d "G:\Juan Carlos\Trabajo\Van Alva\Web Lab\Insular"
echo Current directory: %CD%
echo.
echo Starting server with network access...
npm run dev
pause
