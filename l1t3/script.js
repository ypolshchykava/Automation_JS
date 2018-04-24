var n = 25;
var sum = 0;
var text_invalid_value = "The value you've provided is not a number.\nPlease provide correct value."

if (typeof n === "number") {
for (var i = 1; i <= n; i++) {
		sum = sum + 1/i;
	}	
console.log("The sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n for a given n = "+n+" is "+sum);
}

else {
	console.log(text_invalid_value);
}		
