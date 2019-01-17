'use strict';
var PrixHT = parseFloat(window.prompt ('Saisir un Prix'));

const TVA = 19.6;

var MontantTVA = TVA*PrixHT/100;

var TTC = MontantTVA+PrixHT;

var wish = window.prompt ('Voulez une remise?');
console.log(wish);

document.write("<p>Le Prix HT est: "+PrixHT.toFixed(2)+" €</p>");
document.write("<p>Le TVA est : "+TVA+"</p>");
document.write("<p>Le Montant HT est : "+MontantTVA.toFixed(2)+" €</p>");
document.write("<p> Le Prix TTC est : "+TTC.toFixed(2)+" €</p>");

if (wish == 'oui' || wish == 'Oui' || wish == 'OUI') {
	var remise = parseInt(window.prompt('Saisir remise souhaitez'));
	if (remise >50) {
    	document.write('<p>Ce n\'est pas possible, discount is too high!</p>');
    } else {
    	var PrixRemise = TTC*(100-remise)/100;
	document.write('<p>Vous avez une remise : '+remise+'%</p>');
    document.write('<p>Votre prix avec la remise est : '+PrixRemise.toFixed(2)+' €</p>');
    }	  
} else {
	document.write('<p>Aucune remise n\'a été appliquée</p>');
};

/* CORRECTION
'use strict';

const TAUX_DE_TVA = 20.0;

var demandeRemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageRemise;

montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
demandeRemise = window.prompt('Souhaitez-vous une remise ?');

if(demandeRemise == 'oui' || demandeRemise == 'yes') {
	pourcentageRemise = parseFloat(window.prompt('Montant de la remise en % :'));
	montantHT = montantHT - (montantHT * pourcentageRemise / 100);
}
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');

} else {
	
	document.write("<p>Aucune remise n'a été appliquée.</p>");
}

*/