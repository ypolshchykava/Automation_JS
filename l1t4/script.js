var n = 123456789;
var number;
var reversed = 0;
var text_invalid_value = "The value you've provided is not a number.\nPlease provide correct value."

if (typeof n === "number") {
	number = n;
	 while (n != 0) {
	  reversed = reversed * 10;
	  reversed = reversed + n % 10;
	  n = n - n % 10;
	  n = n / 10;
	 }

	 console.log ("Reversed "+number+" is "+reversed);
}

else {
	console.log(text_invalid_value);
}