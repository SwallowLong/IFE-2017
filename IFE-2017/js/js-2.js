var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
  var ul = document.getElementById( "aqi-list" );
  var myArray = [];
  for (var i=0, len=aqiData.length; i<len; i++) {
    if( aqiData[i][1] > 60 ) {
      myArray.push( aqiData[i] );
    }
  }
  for (var j=0, lens=myArray.length; j<lens; j++) {
    var n = j + 1;
    var li = document.createElement( "li" );
    //隐式类型转换
    var textNode = document.createTextNode( "第" + n + "名：" + myArray[j] );
    li.appendChild( textNode );
    ul.appendChild( li );
  }
})();
