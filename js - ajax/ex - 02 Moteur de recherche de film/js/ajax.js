'use strict';
$.getJSON('https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBack);

function callBack(response) {

    console.log(response);
}
