'use strict';
var PrixHT = parseFloat(window.prompt ('Saisir un Prix HT'));

const TVA = 19.6;

var MontantHT = TVA*PrixHT/100

var TTC = MontantHT+PrixHT;

document.write("<p>Le Prix HT est: "+PrixHT.toFixed(2)+"</p>");
document.write("<p>Le TVA est : "+TVA+"</p>");
document.write("<p>Le Montant HT est : "+MontantHT.toFixed(2)+"</p>");
document.write("<p> Le Prix TTC est : "+TTC.toFixed(2)+"</p>");