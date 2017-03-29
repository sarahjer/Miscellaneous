// var arr1 = [1,3,5,7,9,11,13];
// var arr2 = [4,6,8,10,14];
var arr1 = [1,2,23, 199];
var arr2 = [4,6,8,10,14];
var arr = [];
var a = 0;
var b = 0;
while(true) {
if(arr1[a] == undefined){
	arr.push(arr2[b]);
	b++;
} else if(arr2[b] == undefined) {
	arr.push(arr1[a]);
	a++;
} else if(arr1[a] > arr2[b]){
	arr.push(arr2[b]);
	b++;
} else {
	arr.push(arr1[a]);
	a++;
}
if(arr1[a] == undefined && arr2[b] == undefined){
	// arr.push(arr2[b]);
	break;
}
}
console.log(arr);
