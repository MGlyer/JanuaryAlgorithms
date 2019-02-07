/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
             
*/

var lengthOfLongestSubstring = function(s) {
  if (s === '') return 0
  let longest = 1
  let start = 0
  let end = 1

  while (end <= s.length) {
    if (start === end) end++
    else if (s[start] === s[end]) start++
    else {
      let ind = s.indexOf(s[end], start)
      if (ind === end) {
        if ((end-start)+1 > longest) {
          longest = (end-start)+1
        }
      } else if (ind !== -1) {
        start = ind+1
      }
      end++
    }
  }
  return longest


    // var longestSub = '';
    
    // if (s.length === 1) return 1
    
    // for (var i = 0; i < s.length; i++) {
    //     var currentSubString = s[i];
    //     for (var r = i+1; r < s.length; r++) {
    //         if (!currentSubString.includes(s[r])) {
    //             currentSubString += s[r]
    //         } else {
                
    //             break
    //         }
    //     }
    //     if (longestSub.length < currentSubString.length) longestSub = currentSubString
    // }
    // return longestSub.length
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))