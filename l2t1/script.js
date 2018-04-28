var A = [1, -1, 2, -2, -3];
var Positive = [];
var Negative = [];

for (i = 0; i < A.length; i++) {
	if (A[i] >= 0){
		Positive.push(A[i]);
	}
	else {
		Negative.push(A[i]);
	}
}

console.log( "Array: "+A ); 
console.log( "Positive array: "+Positive ); 
console.log( "Negative array: "+Negative ); 
