'use strict';

displayMovieWithId(52340);

var date = new Date();
//console.log(new Date());

/*function to callback the geolocation & Showtime*/
function position(pos) {

	console.log(pos);
  var location = pos.coords.latitude.toFixed(2)+','+pos.coords.longitude.toFixed(2);
  console.log(location);

  displayShow(52340,location, date);

}

if(navigator.geolocation) {

    console.log('il y a la géoloc');
    navigator.geolocation.getCurrentPosition(position);

} else {

  console.log('Pas de geoloc');
}
