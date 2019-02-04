'use strict';

var ValidateOrder = function() {

  this.order = new BasketSession();
console.log(this.order.item);
  this.show();
}

ValidateOrder.prototype.show = function (response) {

    $('.meal-list tbody').empty();

    var totalHT = 0;

    for (var l = 0; l < this.order.item.length; l ++) {

        totalHT += parseFloat(this.order.item[l].quantity)*parseFloat(this.order.item[l].salePrice);

        var tva = totalHT * 0.2;
        var totalttc = totalHT + tva;

        var tr = $('<tr>');

        tr.append('<td><img src="'+this.order.item[l].img+'"></img></td><td>'+this.order.item[l].name+'</td><td>'+this.order.item[l].quantity+'</td><td>'+this.order.item[l].salePrice+' €</td><td>'+parseFloat(this.order.item[l].quantity)*parseFloat(this.order.item[l].salePrice)+' €</td>');

        $('.meal-list tbody').append(tr);

    }
    // totalHT = 9.2
    $('#totalht').text(totalHT.toFixed(2)+ ' €' );
    $('#tva').text(tva.toFixed(2)+ ' €' );
    $('#totalttc').text(totalttc.toFixed(2)+ ' €' );

    var order = JSON.stringify(this.order.item);
    $('#orderValidation').val(order);
}
