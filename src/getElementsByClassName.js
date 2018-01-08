// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // array for storing elements with matching class name
  var elementsWithClass = [];
  // array of elements in document.body

  // recurse til bodyElements.length is 0, retrieving classLists

  	//retrieve classList of each element and recurse through
  	//base case: if classList[x] === className add to hasClass
  var nodes = document.body.childnodes;

  





}

 if (nodes.length === 0) {
 	return elementsWithClass;
 } else {
 	filterObjForClass(nodes[nodes.length - 1], elementsWithClass);
 }

};

// takes obj checks all child nodes and childrens child nodes for matching elements
// returns obj of all matching nodes
function filterObjForClass (obj, matchArray) {
	if (obj.childnodes.length === 0 && hasClass(obj, className)) {
		matchArray.push(obj);
	} else {
		for (var i = obj.childnodes.length; i < obj.childnodes.length; i++) {
			if (hasClass(obj)) {
				matchArray.push(obj);
			}
			filterObjForClass (obj)
		}
	}



//takes classList and returns true if contains the className
function hasClass (classList, className) {
	if (classList.length === 0) {
		return false;
	} else if (classList[classList.length - 1] === className) {
		return true;
	} else {
		hasClass(classList.slice(0, classList.length - 1));
	}
}