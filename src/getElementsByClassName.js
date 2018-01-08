// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {


  var elementsWithClass = [];


  (function filterForClassName(node) {
  		var classList = node.classList;


  		if (classList && classList.contains(className)) {
  			elementsWithClass.push(node);
  		}

  		if (node.childNodes && node.childNodes.length > 0) {
  			for (var i = 0; i < node.childNodes.length; i++) {
  				filterForClassName(node.childNodes[i]);
  			}
  		}


  }(document.body));

  return elementsWithClass;
}


