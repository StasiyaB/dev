'use strict';

function sayHi() {
  //alert('Hello');
  var word = document.getElementById('technology').innerHTML += "Hello";
  //var word1 = document.getElementById('technology').innerHTML += "Hello";
  //var word1 = document.getElementById('technology').removeClass('');
  console.log(word);
}

setTimeout(sayHi, 1000);
