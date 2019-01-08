'use strict';

function dateUsToFrench(date) {

    var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    var tabdate = date.split('-');
    var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];
    return newDate;
}
