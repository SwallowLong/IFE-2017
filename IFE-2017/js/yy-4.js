var tr = document.getElementsByTagName("tr"),
text = document.getElementById("text"),
btn = document.getElementById("btn");
var i = 0,
l,
a=0,
b;
var myArray = [];
btn.addEventListener( "click", function() {
	if ( /[\d]{1,2}[,][\d]{1,2}/.test(text.value) ) {
		var x = Number(text.value.split(",")[0]),
		y = Number(text.value.split(",")[1]);
		if ( x > 0 && x < 11 && y > 0 && y < 11 ) {
			a++;
			b = a-1;
			myArray.push(text.value);
			if (myArray[a-1]!=myArray[b-1]) {
				i++;
				l = i-1;	
				var td = tr[y].getElementsByTagName("td");
				td[x].className = "red" + i;				
				var j = "red" + l; 
				var red = document.getElementsByClassName(j);
				red[0].className = "tran";
			}
		}		
	}
}, false )