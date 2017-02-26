# jquery.choisir.js

Image Lottery 
*********************

jquery.choisir.js est une interface pour créer une lotterie graphique

C’est-à-dire une page web qui permet de choisir aléatoirement dans une banque de donnée d’image prédéfini en SQL

Sous la forme de 2 fichiers Javascript : 

Choisir :
==

Partie graphique et choisi aléatoirement l’image finale 

Utilise des modals via bootstrap et material 

LotteryLight :
==

Une version réécrite du côté « lottery »  suivant https://github.com/JesonRondo/lottery

La version d’origine permettait de faire apparaitre des images en remplaçant l’URL dans le SRC et faisait tourner TOUTES les images; ce qui est bien, mais pas très modulable.

Ma version précharge toutes les images en amont et fait changer alternativement les propriétés CSS
Cela a l’avantage d’être plus rapide ! 

Les images app


Paramètres :
-

    var settings = {
        frap: 15,           // animate frap
        result: 0,          // lottery result            
        linearTime: 2000,  // duration of linear annimation 
        slowTime: 5000,
        clap: false,
        process_img: []     // process images, first one is default status
    };

+ **Frap :** Nombre d’image apparaissant par seconde 
+ **Result :** l’image de fin 
+ **linearTime :** le premier temps d’apparitions des images en ms
+ **slowTime :** le second temps d’apparition ralenti en ms 

*Le temps totale est l’addition de ces 2 périodes*
+ **clap :** son a chaque changement d’image 
+ **process_img :** json des URL des images 


Principe et précautions d’usage : 3 boutons :
==

    1 - bro-it 
        a - Permet de lancer le tirage
        c - les personnes sont retirées de la liste si et seulement si on clique sur « OK BRO » (pour faire des testes Ad libitum) 

    2 - le mode 
        a - indique en quel mode il se trouve en fonction de la base de donnée utilisé
        b - un simple clic pour le changer 
        c- rafraîchie les images

    3 - le back-stage 
        a - Permet de vérifier qui est dans la liste et qui ne l’ai pas !
        b - l’inventaire est en fonction du mode ! 
        c - changement d’état en un simple clic 
