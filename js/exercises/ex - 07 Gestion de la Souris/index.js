'use strict';

/*************************************************************************************************/
/* **************************************** VARIABLES **************************************** */
/*************************************************************************************************/
var hideRectangle = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');


/*************************************************************************************************/
/* **************************************** FUNCTIONS **************************************** */
/*************************************************************************************************/

function myRectangle(event) {
	event.preventDefault();
	console.log('tok');
	rectangle.classList.toggle('hidden');

}


function colorChange() {
	console.log('tok-tok');
	rectangle.classList.toggle('good');   

}


function colorHover() {
	
	rectangle.classList.add('important');
   
}


function colorBack() {
	
	rectangle.classList.remove('important');
	rectangle.classList.remove('good');

   
}

/*************************************************************************************************/
/* **************************************** MAIN CODE **************************************** */
/*************************************************************************************************/
hideRectangle.addEventListener('click' , myRectangle);

rectangle.addEventListener('dblclick' , colorChange);

rectangle.addEventListener('mouseover' , colorHover);

rectangle.addEventListener('mouseout' , colorBack);


/* CORRECTION

var button    = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');


function onClickButton()
{
    rectangle.classList.toggle('hide');
}


function onDoubleClickRectangle()
{
	rectangle.classList.toggle('good');

}

function onMouseOverRectangle()
{

    rectangle.classList.add('important');
}

function onMouseOutRectangle()
{
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

button.addEventListener('click', onClickButton);

rectangle.addEventListener('dblclick', onDoubleClickRectangle);

rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);


*/