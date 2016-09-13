function Palindrome() {
	for (var i = 999; i >= 100; i--){
		for(var j = 999; j >= 100; j--){
			var a = i * j, c;
			b = a.toString();
			if (b == b.split('').reverse().join('')) {
			c = i + "x" + j;
			console.log("The largest palindrome made from the product of two 3-digit numbers is " + c);
			}
			if (c != undefined) {
				break;
			}
		}
	}
}

Palindrome();