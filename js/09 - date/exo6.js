'use strict';
var date = new Date();
var week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
var month = ['Janvier','Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre']

document.write("<p> Nous sommes le  "+week[date.getDay()] +" "+ date.getDate() +" "+ month[date.getMonth()] +" "+ date.getFullYear()+"</p>");