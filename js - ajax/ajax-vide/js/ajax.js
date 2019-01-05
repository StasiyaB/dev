'use strict';


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function ajaxGetHtmlArticle(response) {
	$('#target').html(response);
  console.log(response);

}


function ajaxGetJasonData(response) {

  console.log(response);
  //$('#target').empty().append('<ul>');
  $('#target').html('');
  $('#target').append('<ul>');

  for (var i =0; i < response.length; i++) {
    $('#target ul').append('<li><p><strong>Prénom :</strong> '+response[i].firstName+'</p><p><em>Téléphone :</em> '+response[i].phone+'</p></li>')
  }

}
