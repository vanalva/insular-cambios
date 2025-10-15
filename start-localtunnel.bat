@echo off
echo Starting LocalTunnel (Free Alternative to ngrok)...
echo.
echo Make sure your website server is running first!
echo (Run start-server.bat in another window)
echo.
echo Starting tunnel in new window...
start "LocalTunnel" cmd /k "lt --port 3000 --no-inspect"
echo.
echo LocalTunnel started in new window!
echo Check the new window for your URL.
pause
