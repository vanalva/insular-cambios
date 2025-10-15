@echo off
echo Starting Cloudflare Tunnel (Most Reliable)...
echo.
echo Make sure your website server is running first!
echo (Run start-server.bat in another window)
echo.
echo Starting tunnel in new window...
start "Cloudflare Tunnel" cmd /k "cloudflared tunnel --url http://localhost:3000"
echo.
echo Cloudflare Tunnel started in new window!
echo Check the new window for your URL.
pause
