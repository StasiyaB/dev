'use strict';

var BasketSession = function() {

  this.item = null;
  this.load();

}

BasketSession.prototype.load = function (){

  loadDataFromDomStorage('basket');

  if (this.item == null) {
    this.item = [];
  }
  this.build();
}

BasketSession.prototype.save = function () {

  saveDataToDomStorage('basket', this.item);
}

BasketSession.prototype.add = function(mealId, name, quantity, salePrice) {

  mealId    = parseInt(mealId);
  quantity  = parseInt(quantity);
  salePrice = parseFloat(salePrice);

  for (var i = 0; i < this.item.length; i ++){

    if (this.item[i].mealId == mealId){

      this.item[i].quantity += quantity;

      this.save();
      this.build();

      return;
    }
  }

  this.item.push ({

    mealId    : mealId,
    name      : name,
    quantity  : quantity,
    salePrice : salePrice
  });
    //console.log(this.item);
    this.save();
    this.build();
}

BasketSession.prototype.build = function (response) {

  console.log(response);  

}
