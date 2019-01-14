'use strict';
var addressBook = load();
refreshAddressBook(addressBook);

function onClickAddContact() {

	$('#contact-form').removeClass('hide');
//console.log('onClickAddContact')
   // $('#contact-form').fadeIn('fast');  retire un display none avec un transition fondu au noir
}

function onClickSaveContact() {
  var contact = createContact (
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );
  addressBook.push(contact)
	saveDataToDomStorage('contacts', addressBook);
  console.log('onClickSaveContact');
}

function onClickShowContactDetails() {

	var id = $(this).data('id');

	$('#contact-details h3').text(addressBook[id].title+' '+addressBook[id].firstName+' '+addressBook[id].lastName);
    $('#contact-details p').text(addressBook[id].phone);

    $('#contact-details').removeClass('hide');
    $('#contact-details').data('id', id);
console.log(id);
}
