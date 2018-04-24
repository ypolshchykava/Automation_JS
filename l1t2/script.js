var n = 10;
var sum = 0;
var text_invalid_value = "The value you've provided is not a number.\nPlease provide correct value."

if (typeof n === "number") {
	for (var i = 2; i <= n/2; i++) {
			if (n % i === 0) {
				sum = sum + i;
			}
		}
		
	console.log(sum === 0);
		
}
else {
	console.log(text_invalid_value);
}