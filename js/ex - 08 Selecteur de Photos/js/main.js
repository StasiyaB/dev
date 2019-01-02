'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var list = document.querySelectorAll('#photo-list li');
var number = document.querySelector('#total em')
console.log(list);


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function selected() {
	
	this.classList.toggle('green');
	var selectedPhotos = document.querySelectorAll('#photo-list li.green');
	number.textContent = selectedPhotos.length;
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener('click', selected)
}

/** CORRECTION **/
/*
'use strict';

var photos = document.querySelectorAll('.photo-list li');
var total  = document.querySelector('#total em');

function onClickListItem()
{
	this.classList.toggle('selected');
	var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
	total.textContent = selectedPhotos.length;
}




for(index = 0; index < photos.length; index++)
{
    photos[index].addEventListener('click', onClickListItem);
}
*/