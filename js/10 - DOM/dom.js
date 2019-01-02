var para1 = document.getElementById('para1');
console.log(para1);
var para2 = document.getElementById('para2');

var para = document.querySelectorAll('.para');
console.log(para[2]);

var clickMe = document.getElementById('clickMe');

para1.style.color = "red";
para1.style.backgroundColor = "yellow"; 

para2.style.backgroundColor = "purple";
para2.style.width = "50%";

para[1].style.fontSize = "18px";

for (var i = 0; i < para.length; i++) {

	para[i].style.fontSize = "32px";
	para[i].classList.remove('para');

}

para2.classList.add('hidden');


clickMe.addEventListener('click' , myFunction);

function myFunction() {
	console.log('coucou');
	para2.classList.toggle('hidden');

}

/*clickMe.addEventListener('dblclick' , myFunction);

function myFunction() {
	console.log('coucou');
    para2.classList.toggle('hidden');

}
*/
