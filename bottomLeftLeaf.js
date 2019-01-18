/*
#513
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
*/

var findBottomLeftValue = function(root) {
  let bottomLeftLeaf = {value: root.val, depth: 1}


  const recurse = (node, depth) => {
    if (!node) return
    
    let left = recurse(node.left, depth+1)
    let right = recurse(node.right, depth+1)

    if (!left && !right && depth > bottomLeftLeaf.depth ) {
      bottomLeftLeaf.depth = depth
      bottomLeftLeaf.value = node.val
    }

    return node
  }

  recurse(root, 1, true)
  return bottomLeftLeaf.value
};