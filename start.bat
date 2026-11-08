@echo off
cd /d "%~dp0"
start "NHK Clock Server" /min py -3 -m http.server 8765 --bind 127.0.0.1
timeout /t 1 /nobreak >nul
start "NHK Clock" "http://127.0.0.1:8765"
