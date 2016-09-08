var validate = function() {
	var value = document.getElementById('CardNumber').value;
	var length = Math.log(value) * Math.LOG10E + 1 | 0, c = 0;
	for(var i = length - 1; i >= 0; i--) {
		 //var a = parseInt((value + '').charAt(i));
		var a = parseInt(value[i]);
		if (i % 2 == 0) {
			a *= 2;
			if (a > 9) {
				a -= 9;
			}
		}
		c = c + a;
	}
	console.log((c % 10) == 0);
}
