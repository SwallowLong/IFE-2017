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
	//将rotate的角度使用a*90的方式来表示，往左则为负即a--,右则为正即a++,Back则a += 2
	if ( text.value.toUpperCase() == "TUN LEF") {
		a--;
	}
	if ( text.value.toUpperCase() == "TUN RIG") {
		a++;
	}
	if ( text.value.toUpperCase() == "TUN BAC") {
		a += 2;
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
	}
	//CSS3的transform属性判断移动坐标以及旋转角度
	red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
}, false )