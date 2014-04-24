var readyResult = function() {

	var id = getURLParameter('id');
	$.get( "/result/"+id , function( data ) {
		$("#text").html(data.text);
	});

};

$(document).on("pagebeforeshow", "#result", readyResult);
