// natif

/*
var para2 = document.getElementById('para2');
var para = document.querySelectorAll('.para');

para2.style.color = "red";
para2.style.backgroundColor = "blue";

for(var i = 0; i < para.length; i++) {

	para[i].addEventListener('click', togglePink);

}

function togglePink() {

	this.classList.toggle('pink');

}



 */




// jquery

$('#para2').css('color', 'red');
$('#para2').css('background-color', 'blue');

$('.para').on('click', togglePink);

function togglePink() {

	$(this).toggleClass('pink');
  //$(this).addClass('pink');
	//$(this).removeClass('pink');

}
