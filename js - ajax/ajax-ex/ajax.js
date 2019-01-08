
/*$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+query,
      type : 'GET',
      dataType: 'json',
      header: {
          "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
          },
      success : displayList,
      fail : function(error) {
      console.log(error.status);
        }
});*/
/***************************************************************/
$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "YOUR_API_KEY",
    },
})
.done(function(response) {
    console.log("HTTP Request Succeeded" ;
    console.log(response);
})
.fail(function(jqXHR) {
    console.log("HTTP Request Failed");
})


$.getJSON('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+query, displayList);

/************************************************
//ajax
function displayList(response) {
	console.log(response);
	var data = response.results;
	var list = $('<ul>');
	for (var i= 0; i < data.length; i ++ ) {
		list.append($('<li data-id="'+data[i].id+'">').append(data[i].title));
	}
	$("#list").html(list);

}
*/
