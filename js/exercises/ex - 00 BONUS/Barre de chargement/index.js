/*
Exo : barre de chargement
Ecrire un script qui rempli une barre au fur et à mesure jusqu'a qu'elle soit pleine a 100%.

Ecrire au passage quelque part sur la barre le pourcentage actuel.

L'affichage de la barre peut être fait en HTML

Exemple ici : https://jsfiddle.net/5c22uqhw/

***SCRIPT**** 

function test() {

	console.log('hello')
}

var repeat = window.setInterval(test, 1000); // repete la fonction test toutes les secondes

window.clearInterval(repeat) // arrête le setInterval


/*var p = document.getElementById('id');

p.textContent = 'coucou'*/




/*************************************************************************************************/
/* **************************************** VARIABLES **************************************** */
/*************************************************************************************************/

var fill = document.getElementById('fill');
var progress = document.getElementById('progress')
var pro = 0;

/*************************************************************************************************/
/* **************************************** FUNCTIONS **************************************** */
/*************************************************************************************************/


function fillProgress() {

	
	var id = setInterval (frame, 50);

	  function frame() {
	    if (pro >= 100) {

	      clearInterval(id);

	    } else {

	      pro++; 

	      fill.style.width = pro + '%';
	      progress.textContent = pro +"%";
	    }
	  }
}

fillProgress()

/*************************************************************************************************/
/* **************************************** MAIN CODE **************************************** */
/*************************************************************************************************/


/** CORRECTION **/
/*
var fill = document.getElementById("fill");
var percent = document.getElementById("percent");
var size = 0;
var timer;

var h1 = document.querySelector('h1');

h1.textContent = "hello"; //<h1> Hello</h1>

function interval()
{
	size += 2;
    fill.style.width=size+"%";
	percent.textContent = size+"%";
    
    if(size >= 100) {
    
    	window.clearInterval(timer);
  
    }
}


timer = window.setInterval(interval,50)
*/