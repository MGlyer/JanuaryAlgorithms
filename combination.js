/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

var combine = function(n, k) {
  let output = []
  let start = 1

  const recurse = (arr) => {
    if (arr.length === k) output.push(arr.slice())
    else {
      let lastPushed = arr[arr.length-1]
      for (let i = lastPushed+1; i <= n; i++) {
        arr.push(i)
        recurse(arr)
        arr.pop()
      }
    }
  }

  for (var i = 1; i <= ((n-k)+1); i++) {
    let array = [i]
    recurse(array)
  }

  return output
};

// console.log(combine(6, 4))