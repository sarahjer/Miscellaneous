var a =0, b = 1, c, sum = 0;
for (i = 0; i < 100; i++){
	c = b + a;
	b = a;
	a = c;
if (a % 2 == 0 && a < 4000000){
	sum = sum + c;
	console.log(sum);
}
}
