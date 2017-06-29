		var text = document.getElementById( "text" ),
		myArray = [],
		second = document.getElementById( "secondChild" ),
		inLeft = document.getElementById( "inleft" ),
		inRight = document.getElementById( "inright" ),
		outLeft = document.getElementById( "outleft" ),
		outRight = document.getElementById( "outright" ),
		mySort = document.getElementById( "mysort" );
		inLeft.addEventListener( "click", function() {
			if ( myArray.length > 60 ) {
				alert( "已到能输出上限" );
			} else { 
				if ( !isNaN(text.value) && !text.value == "" && text.value > 10 && text.value < 100 ) {
				var div = document.createElement( "div" );
				div.style = "height:" + text.value + "px;" + "display: inline-block; padding: 10px; margin: 5px 1px; font-size: 14px; font-weight: bold; color: #fff; background-color: red;";
				second.insertBefore( div, second.firstChild );
				myArray.unshift( text.value );
			} else {
				alert( "请输入10~100之间的数字" );
			}
		}
		}, false );
		inRight.addEventListener( "click", function() {
			if ( myArray.length > 60 ) {
				alert( "已到能输出上限" );
			} else {
				if ( !isNaN( text.value ) && !text.value == "" && text.value > 10 && text.value < 100 ) {
				var div = document.createElement( "div" );
				div.style = "height:" + text.value + "px;" + "display: inline-block; padding: 10px; margin: 5px 1px; font-size: 14px;font-weight: bold; color: #fff; background-color: red;";
				second.appendChild( div );
				myArray.push( text.value );
			} else {
				alert( "请输入10~100之间的数字" );
			}
	    }
		}, false );
		outLeft.addEventListener( "click", function() {
			var a = second.removeChild( second.firstChild );
			alert( myArray[0] );
			myArray.splice( 0, 1 );
		}, false );
		outRight.addEventListener( "click", function() {
			var a = second.removeChild( second.lastChild );
			alert( myArray[myArray.length-1] );
			myArray.splice( myArray.length-1, 1);
		}, false );
		mySort.addEventListener( "click", function() {
			function compare( a, b ) {
				if ( a - b < 0 ) {
					return -1;
				} else if ( a - b > 0 ) {
					return 1;
				} else {
					return 0;
				}
			}
			myArray = myArray.sort( compare );
			for (var i=0; i<myArray.length; i++) {
				var div = document.createElement( "div" );
				div.style = "height:" + myArray[i] + "px;" + "display: inline-block; padding: 10px; margin: 5px 1px; font-size: 14px;font-weight: bold; color: #fff; background-color: red;";
				second.appendChild( div );
				second.removeChild( second.firstChild );
			}
		}, false );