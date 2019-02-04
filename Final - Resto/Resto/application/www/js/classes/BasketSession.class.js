'use strict';

var BasketSession = function() {

  this.item = null;
  this.load();

  this.trash;

  for(var i = 0; i < this.trash.length; i++){

      this.trash[i].addEventListener('click', this.remove.bind(this));
  }
}

BasketSession.prototype.load = function (){

  this.item = loadDataFromDomStorage('basket');

  if (this.item == null) {
    this.item = [];
    $('#order-summary').addClass('hidden');
    $('#empty-basket').removeClass('hidden');
  } else {
    $('#order-summary').removeClass('hidden');
    $('#empty-basket').addClass('hidden');
  }
  this.build();

}

BasketSession.prototype.save = function () {

  saveDataToDomStorage('basket', this.item);
}

BasketSession.prototype.add = function(mealId, name, quantity, salePrice, img) {

  mealId    = parseInt(mealId);
  quantity  = parseInt(quantity);
  salePrice = parseFloat(salePrice);

  if(isNaN(quantity) == false) {
    	$('#quantity').css('border', '1px solid grey');

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
        salePrice : salePrice,
        img       : img
      });
        //console.log(this.item);
        this.save();
        this.build();
  } else {

      $('#quantity').css('border', '1px solid red');
      alert('merci d\'indiquer la quantité');
 }
}

BasketSession.prototype.build = function (response) {

  if(this.item.length == 0) {
    $('#order-summary').addClass('hidden');
    $('#empty-basket').removeClass('hidden');
  }else{
    $('#order-summary').removeClass('hidden');
    $('#empty-basket').addClass('hidden');
  }

  console.log(response);

  this.table = $('<table class="generic-table">');
  this.table.append('<tr><th class="number">Quantité</th><th class="number">Produit</th><th class="number">Prix Unitaire</th><th class="number">Prix Total</th></tr>');

  for (var j = 0; j < this.item.length; j ++) {

    this.tr = $('<tr>');
      this.tr.append('<td class="number">'+this.item[j].quantity+'</td><td class="number"><strong>'+this.item[j].name+'</strong></td><td class="number">'+this.item[j].salePrice+'€</td><td class="number">'+parseFloat(this.item[j].quantity)*parseFloat(this.item[j].salePrice)+'€</td><td class="number"><button class="button button-cancel trash small" title="Supprimer article" data-index="'+j+'"><i class="fa fa-trash"></i></button></td>');

      this.tr.append(this.td);
      this.table.append(this.tr);

  }
  $('#order-summary').html(this.table);

  this.trash = document.querySelectorAll('.trash');

  for(var k = 0; k < this.trash.length; k++){

      this.trash[k].addEventListener('click', this.remove.bind(this));
  }
}

BasketSession.prototype.remove = function (event) {

  event.preventDefault();
  var index = event.currentTarget.dataset.index;
  this.item.splice(index, 1);
  this.save();
  this.build();
}
