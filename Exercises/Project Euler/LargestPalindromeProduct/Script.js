function Palindrome() {
	for (var i = 999; i >= 100; i--){
		for(var j = 999; j >= 100; j--){
			var a = i * j;
			b = a.toString();
			if (b == b.split('').reverse().join('')) {
			console.log (i + "x" + j);
			break;
			}
		}	
	}
}

Palindrome();