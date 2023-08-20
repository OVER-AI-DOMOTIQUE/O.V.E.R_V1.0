
exports.init = function(SARAH, SARAH2){
	SARAH.speak('initialisation terminé. Bonjours monsieur, que puije faire pour vous?');
	 }﻿
	 
	exports.action = function(data, callback, config, SARAH) {
	  
	var exec = require('child_process').exec;
	 
	switch(data.val) {
	  
//Gestion D'Over
//Fichier Over
case "DossierOver":
	var process = '%CD%/plugins/jarvis/bin/OVER/Fichier/DossierOver.bat';
	var Txt = new Array; 
	Txt[0] = "Voici Mon Dossier Pinsipale Monsieur";
	break;	

case "DossierPlugins":
	var process = '%CD%/plugins/jarvis/bin/OVER/Fichier/DossierPlugins.bat';
	var Txt = new Array; 
	Txt[0] = "Voici Mon Dossier PLugine Monsieur";
	break;
	  
	case "DossierBin":
	var process = '%CD%/plugins/jarvis/bin/OVER/Fichier/DossierBin.bat';
	var Txt = new Array;
	Txt[0] = "Voici Mon Dossier Bin Monsieur";
	break;
//ReBoot Over
	case "ReBootOver":
	var process = '%CD%/plugins/jarvis/bin/OVER/ReBootOver.bat';
	var Txt = new Array; 
	Txt[0] = "Je redémarre Monsieur";
	Txt[1] = "Redemarage De Mon Système en cours Monsieur";
	break;
//Intéraction Over
case "la":
	var process = '';
	var Txt = new Array; 
	Txt[0] = "Je Suis La Monsieur";
	Txt[1] = "Oui Je Suis La Monsieur";
	break;

case "CommandVocal":
	var process = '%CD%/plugins/jarvis/bin/OVER/CommandVocal.bat';
	var Txt = new Array; 
	Txt[0] = "Voici Mes Commmand Vocal Monsieur";
	break;



//Affichage Ecran
//Bureaux
	case "Minimize":
	var process = '%CD%/plugins/jarvis/bin/Affichage_Ecran/Bureaux/Minimize.vbs';
	var Txt = new Array;
	Txt[0] = "Voila le bureaux Monsieur";
	Txt[1] = "Affichage du bureaux";
	break;
	
	case "Restore":
	var process = '%CD%/plugins/jarvis/bin/Affichage_Ecran/Bureaux/Restore.vbs';
	var Txt = new Array;
	Txt[0] = "Affichage des fenêtre Monsieur";
	break;
//Ecran On Off
	case "ScreenOff":
	var process = '%CD%/plugins/jarvis/bin/Affichage_Ecran/Ecran/ScreenOff.bat';
	var Txt = new Array;
	Txt[0] = "j'éteind l'écran monsieur";
	break;

	case "ScreenOn":
	var process = '%CD%/plugins/jarvis/bin/Affichage_Ecran/Ecran/ScreenOn.bat';
	var Txt = new Array;
	Txt[0] = "j'allume l'écran monsieur";
	break;



//Gestion App Windows
//Explorateur Windows
case "Explorateur":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Explorateur/Explorateur.bat';
	var Txt = new Array;
	Txt[0] = "Voici L'Explorateur de fichier Monsieur";
	break;

case "Documents":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Explorateur/Documents.bat';
	var Txt = new Array;
	Txt[0] = "Voici Vos Documents Monsieur";
	break;

case "Téléchargements":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Explorateur/Téléchargements.bat';
	var Txt = new Array;
	Txt[0] = "Voici Vos Téléchargements Monsieur";
	break;

case "Vidéo":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Explorateur/Vidéo.bat';
	var Txt = new Array;
	Txt[0] = "Voici Vos Vidéo Monsieur";
	break;




//Navigation Internet
//Gestion Onglet
case "OngletClose":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Navigateur/OngletClose.bat';
	var Txt = new Array;
	Txt[0] = "Onglet Fermer Monsieur";
	break;

case "OngletNew":
	var process = '%CD%/plugins/jarvis/bin/App_Windows/Navigateur/OngletNew.bat';
	var Txt = new Array;
	Txt[0] = "Onglet Ouvert Monsieur";
	break;




//Gestion Des Périphériques PC
//Eteindre L'ordinateur
case "RunShutDown":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/RunShutDown.bat';
	var Txt = new Array;
	Txt[0] = "Fermeture Des Programme Et Arret De L'ordinateur";
	break;
//Redémaré L'ordinateur
case "RunReStart":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/RunReStart.bat';
	var Txt = new Array;
	Txt[0] = "Fermeture Des Programme Et Redemarage De L'ordinateur";
	break;
//Verouillage De L'ordinateur
case "PcLook":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/PcLook.vbs';
	var Txt = new Array;
	Txt[0] = "Vérouillage De L'ordinateur";
	break;
//Gestion Lecteur Cd/Dvd
case "DvdOn":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/DvdOn.bat';
	var Txt = new Array;
	Txt[0] = "Ouverture Du Lecteur Cd Dvd";
	break;

case "DvdOff":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/DvdOff.bat';
	var Txt = new Array;
	Txt[0] = "Fermeture Du Lecteur Cd Dvd";
	break;
//Gestion Du Song
case "VolumeUp":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/VolumeUp.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;

case "VolumeDown":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/VolumeDown.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;

case "VolumeMax":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/VolumeMax.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;
	
case "VolumeMute":
	var process = '%CD%/plugins/jarvis/bin/Géstion_Périphérique_Ordinateur/VolumeMute.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;



//Autre fonction
case "Close":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Close.vbs';
	var Txt = new Array;
	Txt[0] = "Fenêtre Fermer";
	break;

case "Actualise":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Actualise.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;

case "Precedent":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Precedent.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;
	
case "Suivant":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Suivant.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;

case "Enter":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Enter.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;
		
case "Save":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Save.vbs';
	var Txt = new Array;
	Txt[0] = "Ou Vouler Vous L'enregistré Monsieur?";
	break;

case "Tab":
	var process = '%CD%/plugins/jarvis/bin/Autre_Fonction/Tab.vbs';
	var Txt = new Array;
	Txt[0] = "";
	break;
  }    
  

  
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

 }
 