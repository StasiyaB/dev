'use strict';


function createContact (title, firstName, lastName, phone) {

  var contact       = new Object();
  contact.firstName = firstName;
  contact.lastName  = lastName;
  contact.phone     = phone;

  switch(title) {
    case '1' :
        contact.title = 'Mme.';
    break;
    case '2' :
        contact.title = 'Mlle.';
    break;
    case '3' :
        contact.title = 'M.';
    break;
  }
  return contact;
  console.log('createContact');
}

function load() {

	var addressBook = loadDataFromDomStorage('contacts');

    if(addressBook == null)
    {
    	addressBook = []
    }

    return addressBook;
}

function refreshAddressBook(addressBook) {

	 $('#address-book').empty();

     var addressBookList = $('<ul>');

    for(var i = 0; i < addressBook.length; i++) {

    	var li = $('<li data-id="'+i+'">');

      li.append('<a href="#">'+addressBook[i].firstName+' '+addressBook[i].lastName+'</a>');

    addressBookList.append(li);

    }

    $('#address-book').html(addressBookList);
}
