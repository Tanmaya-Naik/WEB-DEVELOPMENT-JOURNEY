/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



//SO TO SLOVÈ THIS PROBLEM WE NEED TO KNOW 4 THING 1-SPIT(""),2-JOIN(""),3-SORT(),4-TOLOWERCASE
//TOLOWERCASE=THIS CONVERT THE STRING INTO LOWERCASE 
//SPLIT("")=THIS SPLIT THE STRING INTO ARRAY FORMAT AND IT SPLIT BASED ON DELIMETER
//JOIN("")=THIS JOIN THE SPLIT ARRAY INTO STRING

function isAnagram(str1, str2) {
                                                         // const TOLOWERCASEstring1=str1.toLowerCase();
                                                         // const arr1=TOLOWERCASEstring1.split("");
                                                         // arr1.sort();
                                                         // let SortedStr1=arr1.join("");

                                                         // const TOLOWERCASEstring2=str2.toLowerCase();
                                                         // const arr2=TOLOWERCASEstring2.split("");
                                                         // arr2.sort();
                                                         // let SortedStr2=arr2.join("");

  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;

}

module.exports = isAnagram;


//run by jest test case like                 npx jest ./tests/