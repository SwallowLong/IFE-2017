		var text = document.getElementById( "text" ),
		myArray = [],
		second = document.getElementById( "secondChild" ),
		inLeft = document.getElementById( "inleft" ),
		inRight = document.getElementById( "inright" ),
		outLeft = document.getElementById( "outleft" ),
		outRight = document.getElementById( "outright" ),
		mySort = document.getElementById( "mysort" );
		EventUtil.addHandler( inLeft, "click", function() {
			if ( myArray.length > 60 ) {
				alert( "已到能输出上限" );
			} else {
				// 此处注意text.value是string类型被isNaN隐式转换了，所以输入"11"是不会执行的，因为此时返回的是"'11'"报错 
				if ( !isNaN(text.value) && text.value > 10 && text.value < 100 ) {
				var div = document.createElement( "div" );
				div.className = "inner";
				div.style = "height:" + text.value + "px;"
				second.insertBefore( div, second.firstChild );
				myArray.unshift( text.value );
			} else {
				alert( "请输入10~100之间的数字" );
			}
		}
		}, false );
		EventUtil.addHandler( inRight, "click", function() {
			if ( myArray.length > 60 ) {
				alert( "已到能输出上限" );
			} else {
				if ( !isNaN( text.value ) && text.value > 10 && text.value < 100 ) {
				var div = document.createElement( "div" );
				div.className = "inner";
				div.style = "height:" + text.value + "px;";				
				second.appendChild( div );
				myArray.push( text.value );
			} else {
				alert( "请输入10~100之间的数字" );
			}
	    }
		}, false );
		EventUtil.addHandler( outLeft, "click", function() {
			var a = second.removeChild( second.firstChild );
			alert( myArray[0] );
			myArray.splice( 0, 1 );
		}, false );
		EventUtil.addHandler( outRight, "click", function() {
			var a = second.removeChild( second.lastChild );
			alert( myArray[myArray.length-1] );
			myArray.splice( myArray.length-1, 1);
		}, false );
		EventUtil.addHandler(mySort, "click", function() {
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
				div.className = "inner";
				div.style = "height:" + myArray[i] + "px;";				

				second.appendChild( div );
				second.removeChild( second.firstChild );
			}
		}, false );