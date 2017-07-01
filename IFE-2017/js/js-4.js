		var text = document.getElementById( "text" ),
		second = document.getElementById( "secondChild" ),
		inleft = document.getElementById( "inleft" ),
		inright = document.getElementById( "inright" ),
		outleft = document.getElementById( "outleft" ),
		outright = document.getElementById( "outright" );
		inleft.addEventListener( "click", function() {
			if ( !isNaN(text.value) && !text.value == "" ) {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( text.value );
			div.className = "inner";
			div.appendChild( textNode );
			second.insertBefore( div, second.firstChild );
		} else {
			alert( "请输入数字" );
		}
		}, false );
		inright.addEventListener( "click", function() {
			//text.value==""时，实际输入值为空，即什么都没输入，而不是输入""空字符串
			if ( !isNaN( text.value ) && !text.value == "" ) {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( text.value );
			div.className = "inner";
			div.appendChild( textNode );
			second.appendChild( div, second.firstChild );
		} else {
			alert( "请输入数字" );
		}
		}, false );
		outleft.addEventListener( "click", function() {
			var a = second.removeChild( second.firstChild );
			alert(a.firstChild.nodeValue);
		}, false );
		outright.addEventListener( "click", function() {
			var a = second.removeChild( second.lastChild );
			alert(a.firstChild.nodeValue);
		}, false );