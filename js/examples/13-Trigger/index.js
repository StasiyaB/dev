'use strict';

//jQuery

setTimeout(function(){

	$.event.trigger('coucou');


}, 3000);


 $(document).on('coucou', function() {

 	console.log('déclenchement du trigger jQuery');
  alert('déclenchement du trigger jQuery');

 });


 $.event.trigger('coucou');

// Native
 var event = document.createEvent('Event');

 event.initEvent('coucou2', true, true);


 document.addEventListener('coucou2', function() {

 	console.log('déclenchement du trigger native');
	alert('déclenchement du trigger native');

 });


document.dispatchEvent(event);


setTimeout(function(){

	document.dispatchEvent(event);

}, 3000);
