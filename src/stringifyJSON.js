// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (objString || arrString) {
	} else {
		var objString = "";
		var arrString = "";
	}

	if (obj === undefined || obj === "undefined") {
		return "";
	} else if (typeof obj === "string") {
		return "\"" + obj +"\"";
	} else if (!Array.isArray(obj) && !(obj instanceof Object)) {
		return "" + obj;
	} else if (Array.isArray(obj)) {
		//recurse through array until (base case) array.length === 0
		//each time pop next array index and add it as string to new array
		(function stringifyArr(obj) {
			if (obj.length === 0) {
				return;
			} else if (obj.length === 1) {
				arrString += stringifyJSON(obj.shift());
				stringifyArr(obj);
			} else if (obj.length > 1) {
				arrString += stringifyJSON(obj.shift()) + ",";
				stringifyArr(obj);
			}
		}(obj));

		return "[" + arrString + "]";


	} else if (obj instanceof Object) {
		var keyList = Object.keys(obj);
		//list out properties and recurse through them
		// Object.keys(obj)
		(function stringifyObj(obj) {
			if (keyList.length === 0) {
				return;
			} else {


				if (keyList[0] === undefined || obj[keyList[0]] === undefined || obj[keyList[0]] instanceof Function) {
					keyList.shift();
					stringifyObj(obj);
				} else if (keyList.length === 1) {
					var key = keyList.shift();
					if (objString !== "") {
						objString += ","
					}
					objString += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
					stringifyObj(obj);
				} else {
					var key = keyList.shift();
					if (objString !== "") {
						objString += ","
					}
					objString += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
					stringifyObj(obj);
				}
			}
		}(obj));

		return "{" + objString + "}";
	}
};
