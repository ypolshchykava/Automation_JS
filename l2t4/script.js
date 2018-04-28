var string1 = "melon";
var string2 = "lemon";

function ifAnagrams(string1 , string2){
	var arr1 = string1.split("");
	var arr2 = string2.split("");	
   
	arr1.sort();
	arr2.sort();

	var ifAnagrams=true;
	if(arr1.length != arr2.length){
		ifAnagrams = false;
	}
	else{

		for(i = 0; i<arr1.length; i++){
			if ((ifAnagrams===true) && (arr1[i] != arr2[i])){
				ifAnagrams = false;
				break;
			}
		}
	}

	
	console.log("- Are my strings: "+string1+" and "+string2+" anagrams?\n- "+ifAnagrams);
}

ifAnagrams(string1,string2);
