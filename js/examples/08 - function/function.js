/*function sayHello()
{
	document.write('<p>Bonjour à toutes et à tous !</p>');
	document.write('<p>Coucou</p>');

}


sayHello();
sayHello();
sayHello();
sayHello();

function sayHelloByName(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}

sayHelloByName('Marie', 'MAYERS');
sayHelloByName('Thib', 'Monesma');

var firstName = window.prompt('firstName ?');

var lastName = window.prompt('laststName ?');

sayHelloByName(firstName,lastName);
*/

function sayHello()
{
    return 'Bonjour à toutes et à tous !';
}

var message = sayHello();
document.write('<h2>' + message + '</h2>');


function addition(num1, num2) {
	var result = num1 + num2;
    
    return result;

}

var test = addition(3, 5);
//document.write(test);


var tab = ['canard', 'chien', 'chat'];

tab.push('souris');

tab.push('oie');


tab.indexOf('chien') // 1

tab.indexOf('poule')// -1

tab.splice(2, 1); // supprime chat 2- number in the table, 1- amount of elements

console.log(tab);
