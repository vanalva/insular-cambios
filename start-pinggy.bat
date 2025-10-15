@echo off
echo Starting Pinggy Tunnel (Free Alternative to ngrok)...
echo.
echo Make sure your website server is running first!
echo (Run start-server.bat in another window)
echo.
echo This will open a browser to pinggy.io
pause
ssh -p443 -R0:localhost:3000 a.pinggy.io
echo.
echo.
echo Pinggy has stopped. Check the error message above.
pause
