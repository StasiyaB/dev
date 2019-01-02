'use strict';

var product = window.prompt('Please, input the name of the product');
var list = ['milk', 'cheese', 'honey'];

/*product = window.prompt('Please, input the name of the product');*/



function bring(item) {

	list.push(item);
}

bring(product);
console.log(list);


function del(item) {

	var index = list.indexOf(item);
	if(index != -1) {
		list.splice(index, 1);
	}
}
	

del('cheese');
console.log(list);

function empty() {

	list = [];

}

//empty();
console.log(list);

function total() {

	var bag = list.length;
	console.log(bag);
	if (bag != 0) {
		document.write('<p> You have '+bag+' products in your bag </p>')
	}
	// to show all the elements of the grid
	for (var i = 0; i < list.length; i++) {
		document.write('<p> You have '+list[i]+'</p>')
	}
}

total();
console.log(list);

/*CORRECTION*/
/*
var shoppingList = new Array();

function addItem(item)
{

	shoppingList.push(item);

}

function displayShoppingList()
{

	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
    
    document.write('<ul>');
    
    for (var i = 0; i < shoppingList.length; i++) {
    
    	document.write('<li>'+shoppingList[i]+'</li>')
    	
    }
    
    document.write('</ul>');
}

function removeAllItems()
{

	shoppingList = [];
    
    //shoppinglist(0, shoppingList.length -1);
    
}


function removeItem(item)
{
	var index = shoppingList.indexOf(item);
    
    if(index == -1)
	{
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
    	shoppingList.splice(index, 1);
    }
    

}

console.clear();


addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');

displayShoppingList()


removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

removeAllItems();
displayShoppingList();
*/