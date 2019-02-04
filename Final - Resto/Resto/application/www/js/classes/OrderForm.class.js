'use strict';

//console.log('gogo');

var OrderForm = function() {

  this.basket = new BasketSession();

  this.menu = document.getElementById('meal');
  this.onClickExecute();
  this.menu.addEventListener('change', this.onClickExecute.bind(this));

  this.order = document.getElementById('order-summary');

  this.validateButton = document.getElementById('validateMeal');
  this.validateButton.addEventListener('click', this.mealToOrder.bind(this));
}

OrderForm.prototype.onClickExecute = function() {
  var id = this.menu.value;
  //console.log(id);
  //console.log(getRequestUrl() +'/meal?id='+ id);
  $.getJSON(getRequestUrl() +'/meal?id='+ id, this.changeMeal);

}


OrderForm.prototype.changeMeal = function(response) {
  console.log(response);

  $("#meal-details").html('');
  $("#meal-details").append('<img src ="'+getWwwUrl()+ '/images/meals/' +response.Photo+'"/>');
  $("#meal-details").append('<p>'+response.Description+'</p>');
  $("#meal-details").append('<span> Prix : '+'<strong>'+parseFloat(response.SalePrice).toFixed(2)+'</strong> €</span>');
}

OrderForm.prototype.mealToOrder = function(event) {

  event.preventDefault();
  //console.log('food');

  var mealId = $('#meal').val();
  var name = $('#meal').find('option:selected').text();
  var quantity = $('#quantity').val();
  var salePrice = $('#meal-details strong').text();
  var img = $('#meal-details img').attr('src');
  //console.log(mealId, name, quantity, salePrice);
  //console.log(name);
  //console.log(quantity);
  //console.log(salePrice);

  this.basket.add(mealId, name, quantity, salePrice, img);

}
