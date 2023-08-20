
// objectif n°1 : mettre le nom du dossier de cette application dans une variable
// objectif n°2 : mettre le nom du sous-dossier dans lequel doit se trouver l'appli à lancer dans une variable
// objectif n°3 : mettre le nom de l'application à lancer dans une variable
// objectif n°4 : concaténer tout ça pour obtenir le nom complet de l'application à lancer
//      (chemin complet et nom de fichier avec son extension) et mettre ce nom complet dans une variable
// objectif n°5 : vérifier que ce fichier existe bien
//      si le fichier n'existe pas, on affiche un message dans la console et on arrête
//      si le fichier existe, on le lance

using System;

namespace ExempleConsoleJessy
{
    class Program
    {
        static void Main(string[] args)
        {
            // on ne va pas utiliser de paramètres, donc on ne s'occuppe pas de ce args

            // objectif 1
            string DossierCourant;
            // la fonction GetCurrentDirectory() se trouve dans la classe Directory,
            // la classe Directory fait partie du NameSpace IO, qui fait partie du NameSpace System
            DossierCourant = System.IO.Directory.GetCurrentDirectory();

            // objectif 2
            // c'est juste une chaine de caractèrer, on peut lui donner sa valeur en même temps qu'on la déclare
            // le @ avant la chaine de caractère n'est pas obligatoire ICI, mais sert souvent, donc autant prendre l'habitude
            string DossierAppli = @"O.V.E.R" ;

            // objectif 3
            string NomAppli = @"O.V.E.R.exe";

            // objectif 4
            string AppliNomComplet;
            // on veut obtenir DossierCourant\DossierAppli\NomAppli
            // la fonction Combine se trouve dans la classe Path, qui est dans le NameSpace System.IO
            AppliNomComplet = System.IO.Path.Combine(DossierCourant, DossierAppli, NomAppli);
            
            // objectif 5
            // je décompose en préparant le test de vérification et les actions à entreprendre selon le résultat,
            // mais on aurait pu tout écrire en même temps
            bool ExePresent = System.IO.File.Exists(AppliNomComplet);

            if (ExePresent==true)
            {
                // on a maintenant besoin de contrôler les erreurs qui peuvent se produire,
                // si une erreur survient, elle est "catchée" dans la variable e de type exception
                try
                {
                    // je lance cet exe
                    System.Diagnostics.Process.Start(AppliNomComplet);

                // j'affiche une info dans la console

                // j'exécute la tâche suivante
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                  
                }

                
            }
            else
            {
                // j'affiche un message d'erreur dans la console et je sors
                Console.WriteLine("le fichier exécutable n'existe pas dans le dossier indiqué");
                return;
            }



        }
    }
}
