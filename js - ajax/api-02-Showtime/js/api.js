'use strict';
function displayMovieWithId(id) {

$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/"+id,
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
})
.done(displayOneMovie)

.fail(function(error) {
    console.log("HTTP Request Failed");
})
}

function displayOneMovie(response) {
	console.log(response);

    $("#pict").attr('src', response.movie.poster_image_thumbnail);
    //console.log(response.movie.poster_image_thumbnail);

    $("#title").text(response.movie.title);
    //$('header h1').text(response.movie.title);
    //console.log(response.movie.title);

    $("#author").text(response.movie.crew[0].name);
    //console.log(response.movie.crew[0].name);

    $("#theme").text(response.movie.genres[0].name);
    //console.log(response.movie.genres[0].name);

    $("#desc").text(response.movie.synopsis);
    //console.log(response.movie.synopsis);

	/*to show date the requested way  */
    if(response.movie.release_dates.FR != undefined) {

    $('#sortie').text(dateUsToFrench(response.movie.release_dates.FR[0].date));

    } else if (response.movie.release_dates.US != undefined) {

      $('#sortie').text(dateUsToFrench(response.movie.release_dates.US[0].date));
    }

  /*list of the starring in the movie*/
    var castNumber = response.movie.cast.length;

    if(castNumber > 5) {

        castNumber = 5;
    }
    var cast ="";

    for(var i = 0; i < castNumber; i++) {
        cast += response.movie.cast[i].name+', '
    }

    $('#cast').text(cast);

  /*to show video*/

    var url = response.movie.trailers[0].trailer_files[0].url; //'https://www.youtube.com/watch?v=abcdfrfg'
  	var youtube = url.split('=');  // ['https://www.youtube.com/watch?v', 'abcdfrfg']

    var embed = 'https://www.youtube.com/embed/';
    $('#video').attr('src', embed+youtube[1]);
}
