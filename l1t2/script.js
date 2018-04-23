var n = 30;
var sum = 0;

for (var i = 2; i <= n/2; i++) {
		if (n % i === 0) {
			sum = sum + i;
		}
	}
	
console.log(sum === 0);
		
