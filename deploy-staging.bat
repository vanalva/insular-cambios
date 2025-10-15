@echo off
echo ========================================
echo    DEPLOY TO GITHUB PAGES STAGING
echo ========================================
echo.

echo [1/5] Switching to master branch...
git checkout master
if %errorlevel% neq 0 (
    echo ❌ Error switching to master
    pause
    exit /b 1
)
echo ✓ Switched to master

echo.
echo [2/5] Pulling latest changes...
git pull origin master
if %errorlevel% neq 0 (
    echo ❌ Error pulling changes
    pause
    exit /b 1
)
echo ✓ Latest changes pulled

echo.
echo [3/5] Switching to staging branch...
git checkout staging
if %errorlevel% neq 0 (
    echo ❌ Error switching to staging
    pause
    exit /b 1
)
echo ✓ Switched to staging

echo.
echo [4/5] Merging master into staging...
git merge master
if %errorlevel% neq 0 (
    echo ❌ Error merging master
    pause
    exit /b 1
)
echo ✓ Master merged into staging

echo.
echo [5/5] Building and deploying to staging...
call npm run build:prod
if %errorlevel% neq 0 (
    echo ❌ Error building project
    pause
    exit /b 1
)

echo Copying build files...
xcopy "dist\*" "." /E /H /Y /Q
if %errorlevel% neq 0 (
    echo ❌ Error copying files
    pause
    exit /b 1
)

echo Committing and pushing to GitHub...
git add .
git commit -m "Deploy to staging - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin staging
if %errorlevel% neq 0 (
    echo ❌ Error pushing to GitHub
    pause
    exit /b 1
)

echo.
echo ========================================
echo        STAGING DEPLOYMENT COMPLETE
echo ========================================
echo.
echo 🚀 Your staging site will be available at:
echo    https://vanalva.github.io/Insular/
echo.
echo ⏱️  Deployment may take 2-5 minutes
echo 📊 Check Actions tab for build status
echo.
echo Press any key to continue...
pause >nul
