/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let tolower=str.toLowerCase();
    let removespace=tolower.replace(/\s/g,"");
    let stringToArray=removespace.split("");
    
    let count=0;
    for(let i=0;i<stringToArray.length;i++){
      if(stringToArray[i] == 'a' ||
         stringToArray[i] == 'e' ||
         stringToArray[i] == 'i' ||
         stringToArray[i] == 'o' ||
         stringToArray[i] == 'u')
      {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;