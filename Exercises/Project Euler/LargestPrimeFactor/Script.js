var startTime = new Date().getTime();
console.log("Prime calculation started at:");
console.log(startTime);

// var a = 600851475143;
// for(i = (a - 1)/2 ; i > 1 ; i--){
// 	if (a % i == 0) {
// 		isPrime(i);
// 		a = a / i;
// 		if(true){
// 			console.log(i);
// 			break;
// 		}
// 	}
// }
// function isPrime(n) {
// 	if (n % 2 == 0)
// 		return false;
// 	if (n % 3 == 0)
// 		return false;
// 	var a = 5, w = 2;
// 	console.log("a : " + a);
// 	while (a * a <= n) {
// 		if (n % a == 0 || n % (a + 2) == 0)
// 			return false;
// 		a = a + w;
// 		w = 6 - w;
// 	return true
// 	}
// // }

function largestPrimeFactor(number) {
var i = 2;
while (i <= number) {
    if (number % i == 0) {
        number /= i;    
    } else {
        i++;
    }
}
console.log(i);
}
var a = 600851475143 ; 
largestPrimeFactor(a);

var endTime = new Date().getTime();
console.log("Prime calculation finished at:");
console.log(endTime);

console.log("**********");
console.log("Total time taken:");
console.log(endTime - startTime);
console.log("**********");