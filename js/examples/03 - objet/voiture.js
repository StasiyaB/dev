'use strict';

var voiture = {};

voiture.name ='Audi';
voiture.year = 2015;
voiture.date = new Date ('2017-04-02');
voiture.passenger1 = 'Angel';
voiture.passenger2 = 'Nobody';

document.write("<p>La marque de la voiture est"+" "+voiture.name+" "+"</p>");
document.write("<p>Son année de fabrication est"+" "+voiture.year+" "+"</p>");
document.write("<p>Sa date d'achat est"+" "+voiture.date.toDateString()+" "+"</p>");
document.write("<p>La liste des passagers:"+" "+voiture.passenger1+" "+"et"+" "+voiture.passenger2+"</p>");


/* CORRECTION

var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;

document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de l'achat : ' + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');


myCar = {
			brand: 'Alfa Roméo',
            passengers : ['Nico', 'Nanard'],
            year: 2012

		}

*/