var i = 11;
while (i < 2540){
	for(j = 1; j <= 10; j++) {
		if (i % j != 0) {
			break;
		}
		else {
			i++;
		}	
	}
}
