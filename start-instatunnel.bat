@echo off
echo Starting InstaTunnel (No Password Screen)...
echo.
echo Make sure your website server is running first!
echo (Run start-server.bat in another window)
echo.
echo Starting tunnel in new window...
start "InstaTunnel" cmd /k "it"
echo.
echo InstaTunnel started in new window!
echo Check the new window for your URL.
pause