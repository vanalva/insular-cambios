@echo off
echo ========================================
echo    INSULAR WEBSITE DEPLOYMENT SCRIPT
echo ========================================
echo.

echo [1/4] Cleaning previous build...
if exist "dist" rmdir /s /q "dist"
echo ✓ Previous build cleaned

echo.
echo [2/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed

echo.
echo [3/4] Building production version...
call npm run build:prod
if %errorlevel% neq 0 (
    echo ❌ Error building project
    pause
    exit /b 1
)
echo ✓ Production build completed

echo.
echo [4/4] Deployment package ready!
echo.
echo ========================================
echo           DEPLOYMENT READY
echo ========================================
echo.
echo 📁 Upload the contents of the 'dist' folder to your GoDaddy hosting
echo 📍 Upload location: public_html/
echo.
echo Required files to upload:
echo   ✓ index.html
echo   ✓ assets/ (entire folder)
echo   ✓ .htaccess
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions
echo.
echo Press any key to open the dist folder...
pause >nul
explorer dist
echo.
echo Deployment script completed! 🚀
pause
