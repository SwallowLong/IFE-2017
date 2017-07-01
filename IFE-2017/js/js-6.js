		var message = document.getElementById( "message" ),
		myArray = [],
		second = document.getElementById( "secondChild" ),
		inleft = document.getElementById( "inleft" ),
		inright = document.getElementById( "inright" ),
		outleft = document.getElementById( "outleft" ),
		outright = document.getElementById( "outright" ),
		search = document.getElementById( "search" ),
		text = document.getElementById( "text" );
		inleft.addEventListener( "click", function() {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( message.value );
			div.className = "inner"
			div.appendChild( textNode );
			second.insertBefore( div, second.firstChild );
			myArray.unshift( message.value );
		}, false );
		inright.addEventListener( "click", function() {
			//text.value==""时，实际输入值为空，即什么都没输入，而不是输入""空字符串			var div = document.createElement( "div" );
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( message.value );
			div.className = "inner"
			div.appendChild( textNode );
			second.appendChild( div );
			myArray.push( message.value );
		}, false );
		outleft.addEventListener( "click", function() {
			var a = second.removeChild( second.firstChild );
			myArray.splice( 0, 1 );
		}, false );
		outright.addEventListener( "click", function() {
			var a = second.removeChild( second.lastChild );
			myArray.splice( myArray.length-1, 1);
		}, false );
		search.addEventListener( "click", function() {
			var a = text.value;
			for (var j=0; j<myArray.length; j++) {
					var b = myArray[j].split("");
					console.log(b);
					var inner = document.getElementsByClassName( "inner" );
					inner[j].innerHTML = b.map( function( item ) {
						item = item.replace( new RegExp( a, "g" ), "<span>" + a + "</span>" );
						console.log(item);
						return item;
					}).join("");	
				}
		}, false )