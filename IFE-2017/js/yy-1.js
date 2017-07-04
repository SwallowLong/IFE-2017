var btn = document.getElementById("btn"),
	input = document.getElementsByClassName("t")
	bottom = document.getElementsByClassName("bottom");
btn.addEventListener( "click", function() {
	if ( findChinaChar(input[0].value) ) {
		bottom[0].innerHTML = "不能输入中文符号"; 
		bottom[0].id = "red1"
		input[0].id = "tred";
	} else {
		var myValue = input[0].value.replace(/[\u4E00-\u9FFF]/g,"aa");
		if ( myValue.length >= 4 && myValue.length <= 14) {
			bottom[0].innerHTML = "名称格式正确"; 
			bottom[0].id = "green";
			input[0].id = "tgreen";
		} else if ( myValue.length == 0 ) {
			bottom[0].innerHTML = "姓名不能为空"; 
			bottom[0].id = "red"
			input[0].id = "tred";
		} else {
			bottom[0].innerHTML = "请输入4~14个字符";
			bottom[0].id = "gray";
			input[0].id = "tgary";
		}
	}
} )