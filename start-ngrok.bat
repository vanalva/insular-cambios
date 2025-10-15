@echo off
echo Starting ngrok tunnel...
echo.
echo Make sure your website server is running first!
echo (Run start-server.bat in another window)
echo.
pause
ngrok http 3000 --host-header="localhost:3000"
echo.
echo.
echo ngrok has stopped. Check the error message above.
pause

