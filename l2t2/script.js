var initial = [1, 2, 1, 2, 3.14, 4, 2, 1];
var distinct = [];

for (i = 0; i < initial.length; i++){

	if(i===0){
		distinct.push({"number":initial[i],"count":1})
		continue;
	}

	var sum = 0;	
	for (n = 0; n < distinct.length; n++){

		if (initial[i] === distinct[n]["number"]) {

			distinct[n]["count"]++;
			sum++;
		}	
	}
	if (sum === 0){

		distinct.push ({"number":initial[i],"count":1});
	
	}	
}


console.log("In your array ["+initial+"] the following numbers exist:\n");

for (n = 0; n < distinct.length; n++){

	console.log ("Number "+distinct[n]["number"]+" repeats "+distinct[n]["count"]+" time(s)\n");
}

