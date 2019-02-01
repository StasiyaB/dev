'use strict';

var ValidateOrder = function() {

  this.order = new BasketSession();
console.log(this.order.item);
  this.show();
}

ValidateOrder.prototype.show = function (response) {

  var table = $('<table class="generic-table">');
  table.append('<tr><th>Nom</th><th class="number">Quantité</th><th class="number">Prix Unitaire</th><th class="number">Prix Total</th></tr>');

    for (var l = 0; l < this.order.item.length; l ++) {

        var tr = $('<tr>');

        tr.append('<td>'+this.order.item[l].name+'</td><td>'+this.order.item[l].quantity+'</td><td>'+this.order.item[l].salePrice+' €</td><td>'+parseFloat(this.order.item[l].quantity)*parseFloat(this.order.item[l].salePrice)+' €</td>');


        table.append(tr);
    }

    $('.meal-list').html(table);
}
