var number = 123456789;
var reversed = 0;

 while (number != 0) {
  reversed = reversed * 10;
  reversed = reversed + number % 10;
  number = number - number % 10;
  number = number / 10;
 }

 console.log (reversed);