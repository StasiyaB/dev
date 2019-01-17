'use strict';
var player = window.prompt ('Input the word "pierre", "ciseau" or "feuille"');
document.write('<p>You choose: '+player+'</p>')
player = player.toLowerCase();
var random = Math.random();
var computer;


if (random < 1/3){
	computer = 'pierre';
} else if (random > 1/3 && random < 2/3){
	computer = 'feuille';
} else {
	computer = ' ciseau';
}

document.write ('<p>Computer chooses: '+computer+'</p>');

if (computer == 'pierre' && player =='ciseau'){
	document.write('<p>Computer wins</p>');
} else if (computer == 'ciseau' && player == 'feuille'){
	document.write('<p>You win!</p>');
} else if (computer == 'feuille' && player == 'pierre'){
	document.write('<p>Computer wins</p>');
} else if (computer == 'pierre' && player =='feuille'){
	document.write('<p>You win!</p>');
} else if (computer == 'ciseau' && player == 'pierre'){
	document.write('<p>You win!</p>');
} else if (computer == 'feuille' && player == 'ciseau'){
	document.write('<p>You win!</p>');
} else {
	document.write('<p>Drawn game</p>');
}

/*CORRECTION
'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3)          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
	switch(computer) {
    	case 'pierre': 
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
        
        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;
        
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;
    }
}
*/