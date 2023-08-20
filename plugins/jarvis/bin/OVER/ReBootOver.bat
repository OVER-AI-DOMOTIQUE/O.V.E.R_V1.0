@echo off
TASKKILL /F /IM WSRMacro.exe
TASKKILL /F /IM node.exe
timeout 1
start %cd%\Start_OVER.cmd