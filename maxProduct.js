/*
152
Given an integer array nums, find the contiguous subarray within an array 
(containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

var maxProduct = function(nums) {
  let highest = nums[0]
  let d = [[nums[0]]]

  for (let i = 1; i < nums.length; i++) {
    let curr = [nums[i]]
    if (curr[0] > highest) highest = curr[0]
    d[i-1].forEach((num) => {
      let newProd = nums[i] * num
      curr.push(newProd)
      if (newProd > highest) highest = newProd
    })
    d.push(curr)
  }
    
  return highest
};