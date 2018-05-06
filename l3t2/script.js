let initial = [1, 2, 1, -2, 3.14, 4, -2, 1, -10, 5, -5];

let positive = initial.filter(function(number){
    return number>0;
});

let negative = initial.filter(function(number){
    return number<0;
});

console.log(positive);
console.log(negative);
