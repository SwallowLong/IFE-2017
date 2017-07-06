var img = document.getElementsByTagName("img"),
box = document.getElementById("box"),
btn = document.getElementById("btn");
for (var i=0; i<img.length; i++) {
	img[i].addEventListener( "click", function() {
		box.className = "start";

		/*setTimeout( function() {
			box.className = "start";
		}, 0 )
		setTimeout( function() {
			box.style = "animation-play-state: paused; -moz-animation-play-state: paused; -webkit-animation-play-state: paused;";
		}, 1000 )*/
	}, false )
}
