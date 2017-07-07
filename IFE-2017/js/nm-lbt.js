(function() {
var img = document.getElementsByTagName("img"),
box = document.getElementById("box"),
btn = document.getElementById("btn");
var j = 0,
x = 0;
//每张图片添加点击事件
for (var i=0; i<img.length; i++) {
	img[i].addEventListener( "click", function() {
       //根据点击选择是循环还是过渡模式
       if (j==0) {
            box.className = "start";
            j=1;
       } else {            
            box.className = "start1";
            box.style = " transform:rotateY(" + -60*x + "deg);-webkit-transform:rotateY(" + -60*x + "deg);";
        //由于条件语句在rotate后 所以其实x=6也是会先执行一次
        //然后条件语句在else
        if (x<6) {
            x++;
        } else {
            x=0;
            j=0;
        }
       } 
	}, false )
}
})();
    