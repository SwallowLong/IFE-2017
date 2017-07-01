		var message = document.getElementById( "message" ),
		myArray = [],
		second = document.getElementById( "secondChild" ),
		inleft = document.getElementById( "inleft" ),
		inright = document.getElementById( "inright" ),
		outleft = document.getElementById( "outleft" ),
		outright = document.getElementById( "outright" ),
		search = document.getElementById( "search" ),
		text = document.getElementById( "text" );
		EventUtil.addHandler( inleft, "click", function() {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( message.value );
			div.className = "inner"
			div.appendChild( textNode );
			second.insertBefore( div, second.firstChild );
			myArray.unshift( message.value );
		}, false );
		EventUtil.addHandler( inright, "click", function() {
			//text.value==""时，实际输入值为空，即什么都没输入，而不是输入""空字符串			var div = document.createElement( "div" );
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( message.value );
			div.className = "inner"
			div.appendChild( textNode );
			second.appendChild( div );
			myArray.push( message.value );
		}, false );
		EventUtil.addHandler( outleft, "click", function() {
			var a = second.removeChild( second.firstChild );
			myArray.splice( 0, 1 );
		}, false );
		EventUtil.addHandler( outright, "click", function() {
			var a = second.removeChild( second.lastChild );
			myArray.splice( myArray.length-1, 1);
		}, false );
		EventUtil.addHandler( search, "click", function() {
			var a = text.value;
			for (var j=0; j<myArray.length; j++) {
					var b = myArray[j].split("");
					var inner = document.getElementsByClassName( "inner" );
					inner[j].innerHTML = b.map( function( item ) {
						item = item.replace( new RegExp( a, "g" ), "<span>" + a + "</span>" );
						return item;
					}).join("");	
				}
		}, false )