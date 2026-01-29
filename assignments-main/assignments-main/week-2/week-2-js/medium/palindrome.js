/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //First we normalize this by removing white space and non alphanumeric 
  str=str.toLowerCase();
  let result="";
  for(let i=0;i<str.length;i++){
    let char=str[i];
    if((char>='a' && char<='z')|| (char>='0' && char<='9')){
      result+=char;
    }
  }
  let start=0,end=result.length-1;
  while(start<end){
    if(result[start]!==result[end]){
      return false;
    }
    
    start++;
    end--;
  } 
  return true;
  
}

module.exports = isPalindrome;
