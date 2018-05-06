function ifAnagrams(string1, string2) {
    let arr1 = string1.split("");
    let arr2 = string2.split("");
    let areAnagrams = true;
  
    if (arr1.length !== arr2.length) {
        areAnagrams = false;
        return areAnagrams;
    }
    else {
        let resultingArray = {};
        arr1.forEach(function(letter){
            if(resultingArray[letter]===undefined) {
                resultingArray[letter] =  1;
            }
            else {
                resultingArray[letter]  += 1;
            }
        });

        arr2.forEach(function(letter){
            if(resultingArray[letter]===undefined) {
                resultingArray[letter] =  -1;
            }
            else {
                resultingArray[letter]  += -1;
            }
        });


        let keys  = Object.keys(resultingArray)
        for(i=0 ;i< keys.length ; i++ ){
            if(resultingArray[keys[i]]!==0){
                areAnagrams = false;
                return areAnagrams;
            }
        }

    }
    return areAnagrams;
}
[{str1: "melon",str2: "lemon"},
    {str1:"abc",str2:"cbad"},
    {str1:"eeee",str2:"eeee"},
    {str1:"abce",str2:"cbad"}

    ].forEach(
    function(item) {
        console.log(ifAnagrams(item["str1"], item["str2"]));
    }
)
