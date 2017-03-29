// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
// var arr = [1,5,2,8,4,9,2];
// var a = getMaxOfArray(arr);
// var index = arr.indexOf(a);
// arr.splice(index,1);
// var b = getMaxOfArray(arr);
// var index = arr.indexOf(b);
// arr.splice(index,1);
// var c = getMaxOfArray(arr);
// var index = arr.indexOf(c);
// arr.splice(index,1);
// var d = a*b*c;
// console.log(d);


function getMaxOfArray(array) {
	var a = arr[0];
	for (i = 1; i < array.length; i++) {
		if (a < array[i]) {
			a = array[i];	
		}
	}
	console.log(a);
}

var arr = [1,5,2,8,4,9,2];
getMaxOfArray(arr);
