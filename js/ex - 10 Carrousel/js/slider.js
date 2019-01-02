<<<<<<< HEAD
'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var bar = document.querySelector('#toolbar-toggle i');
var link = document.querySelector('#toolbar-toggle');
var tools = document.querySelector('.toolbar ul');
var image = document.querySelector('#slider img');
var caption = document.querySelector('#slider figcaption');
var play = document.querySelector('#slider-toggle i');
var forward = document.querySelector('#slider-next');
var revers = document.querySelector('#slider-previous');
var random = document.querySelector('#slider-random');
var imgSlide;
var i = 0;
var go = false;
var images =
[
    { image: 'images/1.jpg', caption: 'Street Art'          },
    { image: 'images/2.jpg', caption: 'Fast Lane'           },
    { image: 'images/3.jpg', caption: 'Colorful Building'   },
    { image: 'images/4.jpg', caption: 'Skyscrapers'         },
    { image: 'images/5.jpg', caption: 'City by night'       },
    { image: 'images/6.jpg', caption: 'Tour Eiffel la nuit' }
];

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function launch() {
	bar.classList.toggle('fa-arrow-down');
	bar.classList.toggle('fa-arrow-right');
	tools.classList.toggle('hide');
}

function plus() {
    
    if (i >= images.length -1) {
    		i = 0;
    } else {
    		i++;
    }
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function minus() {
    
    if (i <= 0) {
    		i = 5;
    } else {
    		i--;
    }
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function shuffle() {
	
	i = getRandomInteger(0, images.length -1);
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function slider() {
  
  play.classList.toggle('fa-pause');
  play.classList.toggle('fa-play');

   if (go == false) {
     imgSlide = setInterval(plus, 2000);
     go = true;
  } else {
      window.clearInterval(imgSlide);
      go = false;
   }
    image.src = images[i].image;
  	caption.textContent = images[i].caption;
}

function keyBoard(event) { // this function is like pre-setup

  if (event.keyCode == 32) { // 32 code for space
    slider();

  } else if (event.keyCode == 37) {
    minus();

  } else if (event.keyCode == 39) {
    plus();

  }else if (event.keyCode == 82) { //82 the code for R
    shuffle();
  }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

image.src = images[i].image;
caption.textContent = images[i].caption;

link.addEventListener('click', launch);

play.addEventListener('click', slider);

forward.addEventListener('click', plus);

revers.addEventListener('click', minus);

random.addEventListener('click', shuffle);

window.addEventListener('keyup', keyBoard);

/**************************************************************************************************/
/********************************  CORRECTION  ***************************************************/
/************************************************************************************************/
/*

var toolbar = document.getElementById('#toolbar-toggle');
var nav = document.querySelector('.toolbar ul');
var icon = document.querySelector('#toolbar-toggle i');
var next = document.getElementById('slider-next');
var prev = document.getElementById('slider-previous');
var random = document.getElementById('slider-random');
var play = document.getElementById('slider-toggle');

var pict = document.querySelector('#slider img');
var fig = document.querySelector('#slider figcaption');

var index = 0;
var isPlaying == false;
var timer;

var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];


function onToolbarToggle(){

  nav.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}

function goToNext() {

  if (index >= slides.length - 1 ) {
    
      index = 0;
    
    } else {
    
      index++;    
    }
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}


function goToPrev() {
  
    if (index <= 0 ) {
    
      index = slides.length - 1 ;
    
    } else {
    
      index--;
    }
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}

function goToRandom() {

  index = getRandomInteger(0, slides.length -1 );
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}

function goToPlay() {
  if (isPlaying == false) {
    
      timer = window.setInterval(goToNext, 2000);
        isPlaying = true;
        
    } else {
      window.clearInterval(timer);
        isPlaying = false;

    }
    
    var faPlay = document.querySelector('#slider-toggle i');
    faPlay.classList.toggle('fa-play');
    faPlay.classList.toggle('fa-pause');

}
function onPushButtons(event) {
  
    console.log(event);
    
    if (isPlaying == true) {
        goToPlay(); 
    }
    
    switch(event.keyCode) {
      
        case 39:
        goToNext();
        break;
        
        case 37:
        goToPrev();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }


}



pict.src = slides[index].image;
fig.textContent = slides[index].legend;

toolbar.addEventListener('click', onToolbarToggle);
next.addEventListener('click', goToNext);
prev.addEventListener('click', goToPrev);
random.addEventListener('click', goToRandom);
play.addEventListener('click', goToPlay);

document.addEventlistener('keyup', onPushButtons);

=======
'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var bar = document.querySelector('#toolbar-toggle i');
var link = document.querySelector('#toolbar-toggle');
var tools = document.querySelector('.toolbar ul');
var image = document.querySelector('#slider img');
var caption = document.querySelector('#slider figcaption');
var play = document.querySelector('#slider-toggle i');
var forward = document.querySelector('#slider-next');
var revers = document.querySelector('#slider-previous');
var random = document.querySelector('#slider-random');
var imgSlide;
var i = 0;
var go = false;
var images =
[
    { image: 'images/1.jpg', caption: 'Street Art'          },
    { image: 'images/2.jpg', caption: 'Fast Lane'           },
    { image: 'images/3.jpg', caption: 'Colorful Building'   },
    { image: 'images/4.jpg', caption: 'Skyscrapers'         },
    { image: 'images/5.jpg', caption: 'City by night'       },
    { image: 'images/6.jpg', caption: 'Tour Eiffel la nuit' }
];

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function launch() {
	bar.classList.toggle('fa-arrow-down');
	bar.classList.toggle('fa-arrow-right');
	tools.classList.toggle('hide');
}

function plus() {
    
    if (i >= images.length -1) {
    		i = 0;
    } else {
    		i++;
    }
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function minus() {
    
    if (i <= 0) {
    		i = 5;
    } else {
    		i--;
    }
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function shuffle() {
	
	i = getRandomInteger(0, images.length -1);
	image.src = images[i].image;
	caption.textContent = images[i].caption;
}

function slider() {
  
  play.classList.toggle('fa-pause');
  play.classList.toggle('fa-play');

   if (go == false) {
     imgSlide = setInterval(plus, 2000);
     go = true;
  } else {
      window.clearInterval(imgSlide);
      go = false;
   }
    image.src = images[i].image;
  	caption.textContent = images[i].caption;
}

function keyBoard(event) { // this function is like pre-setup

  if (event.keyCode == 32) { // 32 code for space
    slider();

  } else if (event.keyCode == 37) {
    minus();

  } else if (event.keyCode == 39) {
    plus();

  }else if (event.keyCode == 82) { //82 the code for R
    shuffle();
  }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

image.src = images[i].image;
caption.textContent = images[i].caption;

link.addEventListener('click', launch);

play.addEventListener('click', slider);

forward.addEventListener('click', plus);

revers.addEventListener('click', minus);

random.addEventListener('click', shuffle);

window.addEventListener('keyup', keyBoard);

/**************************************************************************************************/
/********************************  CORRECTION  ***************************************************/
/************************************************************************************************/
/*

var toolbar = document.getElementById('#toolbar-toggle');
var nav = document.querySelector('.toolbar ul');
var icon = document.querySelector('#toolbar-toggle i');
var next = document.getElementById('slider-next');
var prev = document.getElementById('slider-previous');
var random = document.getElementById('slider-random');
var play = document.getElementById('slider-toggle');

var pict = document.querySelector('#slider img');
var fig = document.querySelector('#slider figcaption');

var index = 0;
var isPlaying == false;
var timer;

var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];


function onToolbarToggle(){

  nav.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}

function goToNext() {

  if (index >= slides.length - 1 ) {
    
      index = 0;
    
    } else {
    
      index++;    
    }
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}


function goToPrev() {
  
    if (index <= 0 ) {
    
      index = slides.length - 1 ;
    
    } else {
    
      index--;
    }
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}

function goToRandom() {

  index = getRandomInteger(0, slides.length -1 );
    
    pict.src = slides[index].image;
  fig.textContent = slides[index].legend;   

}

function goToPlay() {
  if (isPlaying == false) {
    
      timer = window.setInterval(goToNext, 2000);
        isPlaying = true;
        
    } else {
      window.clearInterval(timer);
        isPlaying = false;

    }
    
    var faPlay = document.querySelector('#slider-toggle i');
    faPlay.classList.toggle('fa-play');
    faPlay.classList.toggle('fa-pause');

}
function onPushButtons(event) {
  
    console.log(event);
    
    if (isPlaying == true) {
        goToPlay(); 
    }
    
    switch(event.keyCode) {
      
        case 39:
        goToNext();
        break;
        
        case 37:
        goToPrev();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }


}



pict.src = slides[index].image;
fig.textContent = slides[index].legend;

toolbar.addEventListener('click', onToolbarToggle);
next.addEventListener('click', goToNext);
prev.addEventListener('click', goToPrev);
random.addEventListener('click', goToRandom);
play.addEventListener('click', goToPlay);

document.addEventlistener('keyup', onPushButtons);

>>>>>>> dea60e3f83b316a0953dfca397459bbe1fd36c84
*/