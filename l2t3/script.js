var initial = [ 1, 2, 1, -2, 3.14, 4, -2, 1, -10, 5, -5];

var positive = initial.filter(function(number) {  return number >= 0; });
var negative = initial.filter(function(number) {  return number < 0; });
console.log("Initial array: "+initial);
console.log("Positive array: "+positive); 
console.log("Negative array: "+negative);

var distinct = {};
initial.forEach(function(num){
    if (distinct[num] != undefined)
        ++distinct[num];
    else
        distinct[num] = 1;
});


 
for (var key in distinct)
    console.log ('Number ' + key + ' repeats ' + distinct[key] + ' time(s) \n');