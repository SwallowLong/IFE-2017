var tr = document.getElementsByTagName("tr"),
text = document.getElementById("text"),
btn = document.getElementById("btn"),
red = document.getElementById("red");
//x、y为当输入为坐标的时候的x值与y值
var x = 5,
y = 5,
//小方块旋转的2D的旋转角度为90*a
a = 0,
//b为(a % 4 + 4) % 4，a%4用来判断此时小方块的方向，由于可能出现-1与3、-3与1代表的方向相同
//所以+4在进行求余
b,
//c小方块y轴上的移动格数
c = 0,
//d小方块x轴方向的移动格数
d = 0;
btn.addEventListener( "click", function() {
	//当输入值为x,y时，相应的正则判断
	if ( /[\d]{1,2}[,][\d]{1,2}/.test(text.value) ) {
		x = Number(text.value.split(",")[0]),
		y = Number(text.value.split(",")[1]);
		if ( x > 0 && x < 11 && y > 0 && y < 11 ) {	
            //利用x,y与默认坐标5,5的差值重新赋值c、d 从而达到移动到相应坐标的目的
			c = x-5;
			d = y-5;
		}		
	}
	//输入特定指定时的小方块
	if ( text.value.toUpperCase() == "GO") {
		//求余的方法的到方向
		b = (a % 4 + 4) % 4;
		//通过c、d判断出移动坐标，往上则top减小即--c，往左则left减小即--d
		switch (b) {
			case 0:
            //不管方块如何移动
            //由于往上与左只能移动4格 所以c>-4,d>-4
            //同理往下与右可以移动5格 所以c<5,d<5
            //小于5而不是6是因为当c、d === 4 的时候++c、++d分别可以取到5
            if ( c > -4 ) {
                --c;
            }
			break;
			case 1:
            if ( d < 5 ) {
                ++d;
            }
			break;
			case 2:	
            if ( c < 5 ) {
               ++c; 
            }	
			break;
			default:
            if ( d > -4 ) {
                --d;
            }
			break;	
		}
	} else {
		switch(text.value.toUpperCase()) {
			case "TUN LEF":
				--a;
				break;
			case "TUN RIG":
				++a;
				break;
			case "TUN BAC":
				a += 2;
				break;
			case "TRA LEF":
				if ( d > -4 ) {
                --d;
            }
				break;
			case "TRA TOP":
				if ( c > -4 ) {
                --c;
            }
				break;
			case "TRA RIG":
				if ( d < 5 ) {
                ++d;
            }
				break;
			case "TRA BOT":
				if ( c < 5 ) {
               ++c; 
            }
				break;
			case "MOV LEF":
				//当输入MOV类指令时，先更改a另其旋转，然后通过超时调用将其旋转和移动分隔开
				setTimeout(function() {
					if ( d > -4 ) {
                        --d;
                    }
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = -1;
				break;
			case "MOV TOP":
				setTimeout(function() {
					if ( c > -4 ) {
                        --c;
                    }
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = 0;
				break;
			case "MOV RIG":				
				setTimeout(function() {
					if ( d < 5 ) {
                        ++d;
                    }
					red.style  = "transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -ms-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -moz-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);" + " -webkit-transform: translate(" + 40*d + "px, " + 40*c +"px) rotate(" + 90*a + "deg);";
				},1000);
				a = 1;
				break;
			case "MOV BOT":				
				setTimeout(function() {
					if ( c < 5 ) {
                        ++c; 
                    }
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