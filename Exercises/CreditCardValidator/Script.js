var validate = function() {
	var	value = document.getElementById('CardNumber').value;
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
	var firstName = document.getElementById("firstname").value,
		lastName = document.getElementById("lastname").value;
	if((c % 10) == 0) {
		if (value[0] == 5) {
			document.getElementById("Result").innerHTML =
			"Hello"+ " " + firstName + " " + lastName + " " + " Your Credit Card is Valid & is a Master Card";
		}
		else if(value[0] == 4 ) {
			document.getElementById("Result").innerHTML =
			"Hello" + firstName + " " + lastName + "Your Credit Card is Valid & is a Visa Card";
		}
		else {
			document.getElementById("Result").innerHTML = "Enter Visa or Master Card Number";
		}
	}
	else{
		document.getElementById("Result").innerHTML =
		"Hello" + firstName + " " + lastName + "Your Credit Card is Not Valid";
	}	
}
