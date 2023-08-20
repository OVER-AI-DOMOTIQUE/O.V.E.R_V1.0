Call Volume("MUTE")
'***********************************************************************
Sub Volume(Param)
    set oShell = CreateObject("WScript.Shell") 
    Select Case Param 
    Case "MAX"
        oShell.SendKeys "{" & chr(175) & " 50}" ' volume maximum 100%
    Case "MIN"
        oShell.SendKeys "{" & chr(174) & " 50}" 'volume minimum 0% 
    Case "UP"
        oShell.SendKeys "{" & chr(175) & " 10}" 'volume +20%
    Case "DOWN"
        oShell.SendKeys "{" & chr(174) & " 10}" 'volume +20%
    Case "MUTE"
        oShell.SendKeys chr(173) 'permet de couper/remettre le son (bascule)
    End select
End Sub