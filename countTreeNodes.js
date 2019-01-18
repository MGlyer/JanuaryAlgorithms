/*
#222
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, 
is completely filled, and all nodes in the last level are as far 
left as possible. It can have between 1 and 2h nodes inclusive 
at the last level h.
*/

var countNodes = function(root) {
  let count = 0;
  
  const dfs = (node) => {
    if(!node) return
    count++
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return count
};