$(document).ready(function() {

// RANDOMIZE .RANDOM 
	var random = Math.floor((Math.random()*5) + 1);

	console.log(random);

	switch(random){
		case 1:
			$('.random').html("a patch of edible rarities")
		break;
		case 2:
			$('.random').html("a stacked mosaic of nutritious exotics")
		break;
		case 3:
			$('.random').html("a grove of unexpected specialties")
		break;
		case 4: 
			$('.random').html("a sandy, subtropical agroforest")
		break;
		case 5:
			$('.random').html("uncommon, unexpected specialty produce ")
		break;
		default:
			$('.random').html("a patch of edible rarities")
	}

// JQUERY SCROLLTO

$('#goldenberrylink').click(function(event) {
	$('#goldenberries').ScrollTo();
});

$('#tamarillolink').click(function(event) {
	$('#tamarillos').ScrollTo();
});

$('#passionfruitlink').click(function(event) {
	$('#passionfruit').ScrollTo();
});
	
});