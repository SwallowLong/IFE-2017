var inschool = document.getElementById("inschool"),
outschool = document.getElementById("outschool"),
instudy = document.getElementById("instudy"),
nostudy = document.getElementById("nostudy"),
city = document.getElementById("city"),
school = document.getElementById("school");
inschool.addEventListener( "change", function() {
	nostudy.className = "hide";
	instudy.className = "";
}, false )
outschool.addEventListener( "change", function() {
	instudy.className = "hide";
	nostudy.className = "";
}, false )
city.addEventListener ( "click", function() {
	school.options[city.selectedIndex].selected = "selected";
},false )
school.addEventListener ( "click", function() {
	city.options[school.selectedIndex].selected = "selected";
},false )