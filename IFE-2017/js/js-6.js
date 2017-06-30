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
			div.style = "display: inline-block; padding: 10px; margin: 5px; font-size: 14px; font-weight: bold; color: #fff; background-color: red;"
			div.appendChild( textNode );
			second.insertBefore( div, second.firstChild );
			myArray.unshift( message.value );
		}, false );
		inright.addEventListener( "click", function() {
			//text.value==""时，实际输入值为空，即什么都没输入，而不是输入""空字符串			var div = document.createElement( "div" );
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( message.value );
			div.style = "display: inline-block; padding: 10px; margin: 5px; font-size: 14px;font-weight: bold; color: #fff; background-color: red;"
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
			var newArray = [];
			for (var j=0; j<myArray.length; j++) {
				if ( myArray[j].toString().indexOf( a ) >= 0 ) {
					var b = myArray[j].toString().split("");
					for ( var i=0; i<b.length; i++ ) {
						if ( b[i] == text.value ) {
							 b[i] = "<span style='color: #000; background-color: #fff;'>" + text.value + "</span>";
						}
					}
					var str = b.join("");
					var div = document.createElement( "div" );
					div.innerHTML = str;
  					div.style = "display: inline-block; padding: 10px; margin: 5px; font-size: 14px;font-weight: bold; color: #fff; background-color: red;";
					second.replaceChild( div, second.childNodes[j] );
				}
			}
		}, false )