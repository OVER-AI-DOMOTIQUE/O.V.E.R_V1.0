@echo off
color 06
start %cd%\bin\WSRMacro.exe
timeout 2
SET NODE_PATH=%cd%\NodeJS\node_modules\npm\node_modules;%cd%\NodeJS\node_modules\npm
SET NODE_PATH=%NODE_PATH%;%cd%\ExpressJS\node_modules
SET NODE_PATH=%NODE_PATH%;%cd%\script\lib;%cd%\script\vendor

"%cd%\NodeJS\node.exe" script/wsrnode.js