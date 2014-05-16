function sassInvoke() {
	console.log('meow');
	
	var distance = 0;
	var mouse = { x: 0, y: 0 }; //fucking defaults
	var threshold = 10000; //number of fucking pixels
	var flickerTime = 300; //how long to fuck with the user
	var roundRobin = 0; // changes flicker img
	
	$(document).mousemove(function(event) {
		distance += Math.round(Math.sqrt(Math.pow(mouse.y - event.clientY, 2) + Math.pow(mouse.x - event.clientX, 2)));
		mouse.x = event.clientX;
		mouse.y = event.clientY;
		
		if (distance > threshold) {
			toggleSass(true, roundRobin);
			var fuckingInception = window.setTimeout(function() {
				toggleSass(false, roundRobin);
				roundRobin = Math.floor(Math.random() * 4);
				window.clearTimeout(fuckingInception);
			}, flickerTime);
			distance = 0;
		}
	});
}

function toggleSass(sassState, roundRobin) {
	var theClass = '';
	switch (roundRobin) {
		case 0:
			theClass = 'sass1';
			break;
		case 1:
			theClass = 'sass2';
			break;
		case 2:
			theClass = 'sass3';
			break;
		case 3:
		default:
			theClass = 'toilet';
			break;
	}

	if (sassState) {
		console.log('sass on ' + theClass);
		$("#thequeen").addClass(theClass);
	} else {
		console.log('sass off ' + theClass);
		$("#thequeen").removeClass(theClass);
	}
}

