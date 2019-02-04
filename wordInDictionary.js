/*
Given a string and a string dictionary, find the longest string in the dictionary that can 
be formed by deleting some characters of the given string. If there are more than one 
possible results, return the longest word with the smallest lexicographical order. 
If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
*/

var findLongestWord = function(s, d) {
  let longest = ''
  d.sort((a, b) => {
    if (a.length !== b.length) {
        return b.length - a.length;
    }
    return a.localeCompare(b);
    //this is a new sorting method that I haven't seen before
    //it returns -1 , 0, or 1 depending on the alphabetic comparison
    //of the two words
  });

  for (var i = 0; i < d.length; i++) {
    let word = d[i]
    let sInd = 0
    let wordInd = 0
    let target = word.length

    while (wordInd < target && sInd < s.length) {
      let wordChar = word[wordInd]
      let soupChar = s[sInd]

      if (wordChar === soupChar) {
        wordInd++
      }
      sInd++
    }


    if (wordInd === target && target > longest.length) {
      longest = word
    }
  }

  return longest
};

let soup = "abpcplea"
let dict = ["ale","apple","monkey","plea"]
console.log(findLongestWord(soup, dict))