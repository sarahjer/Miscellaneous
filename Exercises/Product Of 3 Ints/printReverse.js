var arr =[1,2,3,4];
function printReverse(array) {
	for(i = array.length-1; i >= 0; i--) {
		console.log(array[i]);
	}
}
 printReverse(arr);

 var arr1 = [1,1,1,1];
 function isUniform(array) {
 	var a = array[0];
 	for(var i = 1; i < array.length; i++) {
 		if (array[i] !== a ) {
 			return false;
 		}
 	}
 	return true;
 }

 isUniform(arr1);


 function sumArray(array) {
 	var a = 0;
 	array.forEach(function(element){
 		a = a + element;
 	});
 	console.log(a);
 }

 sumArray(arr);

 function max(array) {
 	var max = array[0];
 	for(var i = 1; i < array.length; i++) {
 		if(array[i] > max) {
 			max = array[i];
 		}
 	}
 	console.log(max);
 }

 max(arr);