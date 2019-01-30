'use strict';

//console.log('gogo');

var OrderForm = function() {

  //this.basket = new BasketSession();

  this.menu = document.getElementById('meal');
  this.onClickExecute();
  this.menu.addEventListener('change', this.onClickExecute.bind(this));

}

OrderForm.prototype.onClickExecute = function() {
  var id = this.menu.value;
  console.log(id);
  console.log(getRequestUrl() +'/meal?id='+ id);
  $.getJSON(getRequestUrl() +'/meal?id='+ id, this.changeMeal);

}


OrderForm.prototype.changeMeal = function(response) {
  console.log(response);

  $("#meal-details").html('');
  $("#meal-details").append('<img src ="'+getWwwUrl()+ '/images/meals/' +response.Photo+'"/>');
  $("#meal-details").append('<p>'+response.Description+'</p>');
  $("#meal-details").append('<span> Prix : '+'<strong>'+response.SalePrice+' € </strong>'+'</span>');
}
