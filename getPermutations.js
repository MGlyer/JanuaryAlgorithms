/*
Share
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
*/

var getPermutation = function(n, k) {
    let output = ''
    let count = 0
    
    const recurse = (s) => {
        if (s.length === n) {
            count++
            if (count === k) output = s
        }
        else {
            //let ind = s.length
            for (var i = 1; i <= n; i++) {
                if (!s.includes(i)) {
                  let newS = s + i
                  recurse(newS)  
                }
                if (output.length > 0) return
            }
        }
    }
    for (var i = 1; i <= n; i++) {
        if (output.length > 0) return output
        recurse(i.toString())
    }
    return output
};