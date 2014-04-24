var ready = function() {

	$.get( "/menus", function( data ) {
		$.each(data, function( key, value ) {
		  $("#menu").append($('<li>').append($('<a>').attr('href','result.html?id='+value.id).append(value.name)));
		});
	 	$("#menu").listview('refresh');
	});

};	
$(document).on("pageinit", "#index", ready);