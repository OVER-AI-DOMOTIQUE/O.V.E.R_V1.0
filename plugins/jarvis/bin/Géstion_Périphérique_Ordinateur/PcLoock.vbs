'====================================
' STOP THE SYSTEM
'====================================

Dim WshShell
Dim sScriptPath

Set WshShell = CreateObject("WScript.Shell")

sScriptPath  = Replace(WScript.ScriptFullName, WScript.ScriptName, "")
WshShell.CurrentDirectory = sScriptPath

WshShell.Run "rundll32.exe user32.dll, LockWorkStation"

set WshShell = nothing


WScript.Quit(0)