 var EventUtil = {
 
     addHandler:function (element,type,handler) {
          if(element.addEventListener){
              element.addEventListener(type, handler,false);
          } else if (element.attachEvent) {
              element.attachEvent("on" + type,handler);
         }else {
             element["on" + type] = handler;
          }
     },
 
     removeHandler:function (element,type,handler) {
          if (element.removeEventListener) {
              element.removeEventListener(type, handler,false);
          } else if (element.detachEvent) {
              element.detachEvent("on" + type,handler);
          }else {
              element["on" + type] = null;
          }
     }
 };
 function findChinaChar(element) {
    var re = new RegExp ("[^\\x00-\\xff]+","g");
    element = element.replace( new RegExp ("[\\u4E00-\\u9FFF]+","g"), "1" );
    if ( re.test(element) ) {
      return true;
    } else {
      return false;
    }
 }
function cleanSpace(element) {
  var children = [];
    for ( var j=0, len=element.childNodes.length; j<len; j++ ) {
      if (element.childNodes[j].nodeType == 1) {
        children.push( element.childNodes[j] );
      }
    }
    return children;
}
function Contrary(element) {
  if (true) {
    return false;
  } else {
    return true;
  }
}