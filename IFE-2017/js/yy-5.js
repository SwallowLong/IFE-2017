var tr = document.getElementsByTagName("tr"),
text = document.getElementById("text"),
btn = document.getElementById("btn"),
red = document.getElementById("red");
var x = 5,
y = 5,
a = 0,
b,
c = 0,
d = 0;
btn.addEventListener( "click", function() {
	if ( /[\d]{1,2}[,][\d]{1,2}/.test(text.value) ) {
		x = Number(text.value.split(",")[0]),
		y = Number(text.value.split(",")[1]);
		if ( x > 0 && x < 11 && y > 0 && y < 11 ) {	
			c = x-5;
			d = y-5;
		}		
	}
	if ( text.value.toUpperCase() == "GO") {
		//求余的方法的到方向
		b = (a % 4 + 4) % 4;
		//通过c、d判断出移动坐标，上则top减小即--c，左则left减小即--d
		switch (b) {
			case 0:
			--c;
			break;
			case 1:
			++d;
			break;
			case 2:		
			++c;
			break;
			default:
			--d;
			break;	
		}
	} else {
		switch(true) {
			case text.value.toUpperCase() == "TUN LEF":
				--a;
				break;
			case text.value.toUpperCase() == "TUN RIG":
				++a;
				break;
			case text.value.toUpperCase() == "TUN BAC":
				a += 2;
				break;
			case text.value.toUpperCase() == "TRA LEF":
				--d;
				break;
			case text.value.toUpperCase() == "TRA TOP":
				--c;
				break;
			case text.value.toUpperCase() == "TRA RIG":
				++d;
				break;
			case text.value.toUpperCase() == "TRA BOT":
				++c;
				break;
			case text.value.toUpperCase() == "MOV LEF":
				setTimeout(function() {
					--d;
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = -1;
				break;
			case text.value.toUpperCase() == "MOV TOP":
				setTimeout(function() {
					--c;
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = 0;
				break;
			case text.value.toUpperCase() == "MOV RIG":				
				setTimeout(function() {
					++d;
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = 1;
				break;
			case text.value.toUpperCase() == "MOV BOT":				
				setTimeout(function() {
					++c;
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = 2;
				break;
			default:
				break;
		}
	}
	

	//CSS3的transform属性判断移动坐标以及旋转角度
	red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
}, false )