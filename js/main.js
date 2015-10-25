$(document).ready(function() {



$('.jumbotron').click(function(event) {
	$(".insta a").attr("href", "https://instagram.com/edulis8/");
	$(".insta a").attr("target", "_self");
	$(".insta a").html("<p>hi</p>");
	
});

	

	$(".buy").attr("href", "edulisgardens.com")



	$('.insta img').mouseover(function(event) {
		/* Act on the event */


		$('this').fadeOut('slow');

		event.preventDefault();
		window.open("https://instagram.com/edulis8/")
	});
});
