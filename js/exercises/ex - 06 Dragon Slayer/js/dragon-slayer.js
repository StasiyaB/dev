'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
var game = {};

var player;
var dragon;
var armourRatio;
var weaponRatio;
var level;
var armour;
var weapon;
var turn;
/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function initializeGame() {

	game.level = requestInteger('Choose your level \n'+ '1. Easy - 2. Normal - 3. Hard', 1, 3);
	
		switch (game.level) {

			case 1:
			game.player = getRandomInteger(200, 250);
			game.dragon = getRandomInteger(150, 200);
			break;

			case 2:
			game.player = getRandomInteger(200, 250);
			game.dragon = getRandomInteger(200, 250);
			break;

			case 3:
			game.player = getRandomInteger(150, 200);
			game.dragon = getRandomInteger(200, 250);
			break;

		}
	game.armour = requestInteger('Armour? \n'+ '1. Copper - 2. Iron - 3. Magic', 1, 3);
			
		if (game.armour == 1) {

			game.armourRatio = 1;
	      
	      } else if ( game.armour == 2) {
	      	
	        game.armourRatio = 1.25;
	      
	      } else {
	      
	      	 game.armourRatio = 2;
	         
	    }


	game.weapon = requestInteger('Weapon?\n'+ '1. Wood - 2. Steel - 3. Excalibur', 1, 3);
	
			switch (game.weapon) {

			case 1:
			game.weaponRatio = 0.5;
			break;

			case 2:
			game.weaponRatio = 1;
			break;

			case 3:
			game.weaponRatio = 2;
			break;
	
		}
}


console.log(game);


function damagePlayer() {
		var loss; 
		if (game.level == 1) {

			loss = getRandomInteger(25,30)* game.weaponRatio;

		} else {
			loss = getRandomInteger(15,20)* game.weaponRatio;
		}
		return Math.round(loss);
}



function damageDragon() {
		var loss; 
		if (game.level == 1) {

			loss = getRandomInteger(10, 20) / game.armourRatio;
		} 
		else {

			loss = getRandomInteger(20, 30) / game.armourRatio;
		}

		return Math.round(loss);
	
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function gameLoop() {
 	
 	do {
 	var turn = getRandomInteger(1, 2);

 	if (turn == 1) {

 		game.player -= damageDragon(); 
 		// game.player = game.player - damageDragon();
 		console.log('Dragon is more powerful');

 	} else {

 		game.dragon -= damagePlayer();
 		console.log('Player is more powerful');
 	}

 	console.log('Player: '+ game.player+' PV');
 	console.log('Dragon : '+ game.dragon+' PV');

 	}while (game.dragon > 0 && game.player > 0);

}



function showWinner() {


	if (game.player <= 0) {

		document.write('<img src="images/dragon.jpg">');

	} else {

		document.write('<img src="images/knight.jpg">');
	}

}


function startGame() {
    
    initializeGame();

    gameLoop();

    showWinner();
}

startGame();


/*****************************************************************/
/***************************** CORRECTION ************************/
/*****************************************************************/
/*
'use strict'; 

var game = {}



function initializeGame()
{
	 game.difficulty = requestInteger ( 'Niveau de difficulté ?\n' + '1. Facile - 2. Normal - 3. Difficile', 1, 3 );

	switch(game.difficulty)
    {
    	case 1:
        	game.hpDragon = getRandomInteger(150, 200);
       		game.hpPlayer = getRandomInteger(200, 250);
        break;
        
        case 2:
        	game.hpDragon = getRandomInteger(200, 25);
       		game.hpPlayer = getRandomInteger(200, 250);
        break;
        
        case 3:
        	game.hpDragon = getRandomInteger(200, 250);
       		game.hpPlayer = getRandomInteger(150, 200);
        break;
      }
      
      
      game.armor = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3 );
      if( game.armor == 1) {
      
      	game.armorRatio = 1;
      
      } else if ( game.armor == 2) {
      	
        game.armorRatio = 1.25;
      
      } else {
      
      	 game.armorRatio = 2;
         
      }
      
      
      game.sword = requestInteger('Epée ?\n' +'1. Bois - 2. Acier - 3. Excalibur', 1, 3);
      
      
	switch(game.sword)
    {
    
    	case 1:
        	game.swordRatio = 0.5;
        break;
        
        case 2:
        	game.swordRatio = 1;
        break;
        
        case 3:
        	game.swordRatio = 2;
        break;
        
    }


}

function computeDragonDamagePoint()
{
	var damagePoint;
	
    if (game.difficulty == 1) {
		damagePoint = getRandomInteger(10, 20);
    } else {
    	 damagePoint = getRandomInteger(30, 40);
    }
    
     return Math.round(damagePoint / game.armorRatio);
}

function computePlayerDamagePoint()
{
    var damagePoint;
    
    switch(game.difficulty)
    {
    
    	case 1:
        	damagePoint = getRandomInteger(25, 30);
        break;
        
        case 2:
        	damagePoint = getRandomInteger(15, 20);
        break;
        
        case 3:
        	damagePoint = getRandomInteger(5, 10);
        break;
        
     }
    
    return Math.round(damagePoint * game.swordRatio);
    
}

function gameLoop()
{
    var damagePoint;
    var dragonSpeed;
    var playerSpeed;
    game.round = 1;
    
    
    while(game.hpDragon > 0 && game.hpPlayer > 0)
    {
        dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);
        
        console.log('Tour numéro ' + game.round);

        if(dragonSpeed > playerSpeed)
        {
            damagePoint = computeDragonDamagePoint();
            game.hpPlayer -= damagePoint;
            console.log
            (
                'Le dragon est plus rapide et vous brûle, il vous enlève ' +
                damagePoint + ' PV'
            );
        
        } else {
            damagePoint = computePlayerDamagePoint();
            game.hpDragon -= damagePoint;
            console.log('Vous êtes plus rapide et frappez le dragon, vous lui enlevez ' + damagePoint + ' PV');
        }

        showGameState();
        
        game.round ++;
    
    }


}


function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}


function showGameWinner()
{
    if(game.hpDragon > 0)
    {
        document.write('<img src="images/dragon.jpg"/>');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
    } else {
        document.write('<img src="images/knight.jpg"/>');
        console.log("Vous avez gagné, vous êtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    
    }

}



function startGame() {
    
    initializeGame();
    console.log('Points de vie de départ :');
    showGameState();

    gameLoop();

    showGameWinner();
}


startGame();
*/