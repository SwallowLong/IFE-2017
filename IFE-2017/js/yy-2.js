var form = document.getElementById("form"), 
full = document.getElementById("full"),
psw = document.getElementById("psw"),
check = document.getElementById("check"),
email = document.getElementById("email"),
tel = document.getElementById("tel"),
btn = document.getElementById("btn"),
div = document.getElementsByClassName("left");
var myArray = [full, psw, check, email, tel];
for (let i=0; i<myArray.length; i++) {
	myArray[i].addEventListener( "focus", function(){
		var newArray = ["必填，长度为4~14个字符", "长度为8~16个字符，只能包含数字、字母以及英文字符", "再次输入相同密码", "请输入邮箱", "必填，输入要使用的手机号码"],
		newdiv = document.createElement("div");
		newdiv.innerHTML = newArray[i];
		newdiv.className = "gray";
		if ( cleanSpace(div[i]).length < 3 ) {
			div[i].appendChild( newdiv );
		}
		var myDiv = cleanSpace(div[i])[2];
		if ( myDiv ) {
			myDiv.innerHTML = newArray[i];
			myDiv.className = "gray";
			myArray[i].className = "tgray";
		}
	}, false )
	myArray[i].addEventListener( "blur", function() {
		var myValue = myArray[i].value.replace(/[\u4E00-\u9FFF]/g,"aa"),
		regArray = [ !findChinaChar(myArray[i].value) && myValue.length >= 4 && myValue.length <= 14, /^[a-zA-Z\d_]{8,16}$/g.test(myArray[i].value), myArray[2].value == myArray[1].value && myArray[1].value.length > 0, /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(myArray[i].value), /^[1][3578][0-9]{9}$/g.test(myArray[i].value) ],
		myDiv = cleanSpace(div[i])[2],
		trueArray = [ "名称格式正确", "密码可用", "密码输入一致", "邮箱可用", "手机格式正确"],
		spaceArray = [ "名称", "密码", "密码", "邮箱", "手机号码"]
		errorArray = [ "请确认输入的是4~14个字符且不包含中文字符", "密码不正确", "两次输入不一致", "邮箱格式错误", "请输入正确的手机号码"];
		if ( regArray[i] ) {
			myArray[i].className = "tgreen";
			myDiv.className = "green";
			myDiv.innerHTML = trueArray[i];
		} else {
			myArray[i].className = "tred";
			myDiv.className = "red";
			if( myArray[i].value.length == 0 ) {
				myDiv.innerHTML = spaceArray[i] + "不能为空，请输入" + spaceArray[i];
			} else {
				myDiv.innerHTML = errorArray[i];
			}
		}	
	}, false )
}
form.addEventListener( "submit", function() {
	var subArray = [],
		conArray = [];
	for ( var i=0; i<myArray.length; i++ ) {
		if ( cleanSpace(div[i])[2] ) {
			subArray.push( cleanSpace(div[i])[2].className );
			conArray.push( cleanSpace(div[i])[2].innerHTML );
			}
		}
		if ( subArray.length == 5 ) {
			var everyResult = subArray.every( function(item) {
				return ( item == "green" );
			} );
			if ( !everyResult ) {
				for (let j=0; j<subArray.length; j++) {
					if ( subArray[j] == "red" || subArray[j] == "gray" ) {
						alert( conArray[j] );
					}	
				}
								
			}
		} else {
			alert ("请确认是否有表单未填写");
		}	
}, false )
