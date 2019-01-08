
$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+query,
      type : 'GET',
      dataType: 'json',
      header: {


            },
      success : displayList,
      fail : function(error) {
      console.log(error.status);
        }
});


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
