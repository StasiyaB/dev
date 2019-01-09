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
	//console.log(response);

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

function displayShow(movieId, location, date) {
  $.ajax({
      url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id="+movieId+"&countries=FR&location="+location+"&time_to="+date+"&distance=50",
      type: "GET",
      dataType: "json",
      data: {
          "countries": "FR",
      },
      headers: {
          "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
      },
  })
  .done(displayShowDetail)

  .fail(function(error) {
      console.log("HTTP Request Failed");
  })
}

function displayShowDetail(response) {
  console.log(response);

    var showtimes = [];

    for(var i = 0; i < response.showtimes.length; i++) {
    	var seance = splitSeance(response.showtimes[i].start_at);

       	var test = true;
        for (var j = 0; j < showtimes.length; j ++) {

            if (showtimes[j].cineId == response.showtimes[i].cinema_id) {

                showtimes[j].show.time.push(seance.hour);
                showtimes[j].show.url.push(response.showtimes[i].booking_link);
                test = false;
                }
            }

            if (test == true) {
                showtimes.push({
                cineId :  response.showtimes[i].cinema_id,
                show : {
                      	time : [seance.hour],
                     		url : [response.showtimes[i].booking_link]
                   	   }
                });
            }
    }
    console.log('nouveau tab', showtimes);
    buildTableWithShow(showtimes);
}

function buildTableWithShow(showtimes) {
	var table = $('<table>');

    table.append('<tr><td>cinema</td><td>horaire des scéance d\'aujourd\'hui</td></tr>');

	for (var k = 0; k < showtimes.length; k++) {

    	var tr = $('<tr>');
        tr.append('<td id="'+showtimes[k].cineId+'">'+showtimes[k].cineId+'</td>');

        var td = $('<td>');

        for(var l = 0; l < showtimes[k].show.time.length; l++) {

            td.append('<a href="'+showtimes[k].show.url[l]+'">'+showtimes[k].show.time[l]+'</a> ')

        }

        tr.append(td);

        table.append(tr);

    }

	$('#affiche').html(table);
  for(var m = 0; m < showtimes.length; m ++) {

    	getCineWithId(showtimes[m].cineId);
  }
}

function getCineWithId(cineId) {
	jQuery.ajax({
    url: "https://api.internationalshowtimes.com/v4/cinemas/"+cineId,
    type: "GET",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response) {

        console.log('place',response);



        $('#'+response.cinema.id).html('<h3>'+response.cinema.name+'</h3> <p>'+response.cinema.location.address.display_text+'</p>');


    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
}
