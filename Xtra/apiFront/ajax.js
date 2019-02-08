
const API_KEY = "aze";

$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/customer.php?id=103&api_key=aze', displayUser);

/*  function callBack(response) {

      console.log(response);
}

$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/office.php?id=3', callBack);

  function callBack(response) {

      console.log(response);
}

$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/employees.php', callBack);

  function callBack(response) {

      console.log(response);
}
*/
function displayUser(response) {
	console.log(response);
}


function findCustomer(event) {
	event.preventDefault();
	var keyWord = $('#customerName').val();
	$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/customer.php?keyword='+keyWord+'&api_key='+API_KEY, buildCustomer);

}


function buildCustomer(response) {

	console.log(response);
      var ul = $('<ul>');
	    for(var i =0; i < response.length; i++) {
		  ul.append('<li>'+response[i].customerName+'</li>')
	}

	$('#result').html(ul);

}
$('#submitCN').on('click', findCustomer);
