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
  let bserial = []

  // depth first search version
  const dfs = (node, depth) => {
    if (!node) return
    let targetRow = view[depth] || []
    targetRow.push(node.val)
    view[depth] = targetRow

    dfs(node.left, depth+1)
    dfs(node.right, depth+1)
  }

  dfs(root, 0)
  let dAnswer = []
  view.forEach((row) => {
    dAnswer.push(row[row.length-1])
  })

  //breadth first search version
  let q = [root]

  while(q.length > 0) {
    let size = q.length
    let row = []
    for (let i = 0; i < size; i++) {
      let curr = q[i]
      if (!curr) continue
      q.push(curr.left)
      q.push(curr.right)
      row.push(curr.val)
    }
    if (row.length) bserial.push(row)
    q = q.slice(size)
  }

  let bAnswer = []
  bserial.forEach(row => bAnswer.push(row[row.length-1]))

  //dAnswer is dfs, bAnswer is bfs
  return dAnswer
  // return bAnswer
};