'use strict';
var a = parseFloat(window.prompt ('input the number'));
var b = parseFloat(window.prompt ('input another number'));
var action = window.prompt ('input the action with the numbers');
var addition;
var sustraction;
var multiplication;
var division;
var puissance;

switch (action) {
			case 'addition':
			case '+':
				var addition = a+b;
				document.write('<p>Le resultat de '+a+' + '+b+' est '+addition+'</p>');
			break;

			case 'sustraction':
			case '-':
				var sustraction = a-b;
				document.write('<p>Le resultat de '+a+' - '+b+' est '+sustraction+'</p>');
			break;
						
			case 'multiplication':
			case '*':
				var multiplication = a*b;
				document.write('<p>Le resultat de '+a+' * '+b+' est '+multiplication+'</p>');
			break;

			case 'division':
			case '/':
				var division = a/b;
				if (b==0) {
					document.write ('<p> Action is invalid ERROR </p>');
				}
				else {
					document.write('<p>Le resultat de '+a+' / '+b+' est '+division+'</p>');
				}
			break;

			case 'puissance':
			case '^':
				var puissance = a**b;
				document.write('<p>Le resultat '+a+' puissance '+b+' est '+puissance+'</p>');
			break;

			default:
			    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
			break;

	}

/*CORRECTION
'use strict';
var number1;
var number2;
var operation;
var result;

number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


switch(operation)
{
	case '+':
	case 'addition':
    result = number1 + number2;
    break;
    
    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;
    
    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    case '/':
    case 'division':
    
    if(number2 == 0)
   	{
       document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

       break;
   	}
    
    result = number1 / number2;
    
    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;

}

if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}

if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}
*/