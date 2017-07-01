/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  var source = document.getElementById( "source" ),
      data = [];
  for (var i=0; i<source.childNodes.length; i++) {
    if (source.childNodes[i].nodeType == 1) {
      var a = source.childNodes[i].childNodes[0].nodeValue;
      var b = source.childNodes[i].childNodes[1].childNodes[0].nodeValue;
      data.push( [a, b] );
    }
  }
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  return data;
}


/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  function compare( value1, value2 ) {
    if ( value1[1] < value2[1] ) {
        return -1;
    } else if ( value1[1] > value2[1] ) {
        return 1;
    } else {
        return 0;
    }
  }
  data.sort( compare);
  return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  for (var i=0; i<data.length; i++) {
    var resort = document.getElementById( "resort" ),
        j = i + 1;
        li = document.createElement( "li" ),
        //<li>第一名：北京空气质量：<b>90</b></li>
        textNode = document.createTextNode( "第" + j + "名：" + data[i][0] + " " + "<b>" + data[i][1] + "</b>" );
    li.appendChild( textNode );
    resort.appendChild( li );
  }
}

function btnHandle() {
  var btn = document.getElementById( "sort-btn" );
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
  btn.disabled = true;
}

function init() {
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  var btn = document.getElementById( "sort-btn" );
  btn.addEventListener( "click", function() {
    alert( btnHandle() );
  }, false );
}

init();
