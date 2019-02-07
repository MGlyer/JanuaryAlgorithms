/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

const groupAnagrams = function(strs) {
  let output = []
  let currAnas = {}

  strs.forEach((s) => {
    let sorted = s.split('').sort().join('')
    if (currAnas.hasOwnProperty(sorted)) currAnas[sorted].push(s)
    else currAnas[sorted] = [s]
  })
  return Object.values(currAnas)
};