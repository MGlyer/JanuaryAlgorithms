/*
#199

Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

var rightSideView = function(root) {
}; 
*/

var rightSideView = function(root) {
  let view = []

  const dfs = (node, depth) => {
    if (!node) return
    let targetRow = view[depth] || []
    targetRow.push(node.val)
    view[depth] = targetRow

    dfs(node.left, depth+1)
    dfs(node.right, depth+1)
  }

  dfs(root, 0)
  let answer = []
  view.forEach((row) => {
    answer.push(row[row.length-1])
  })

  return answer
};