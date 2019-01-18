/*
#623

function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
Given the root of a binary tree, then value v and depth d, 
you need to add a row of nodes with value v at the given depth d. 
The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, 
create two tree nodes with value v as N's left subtree root and right subtree root. 
And N's original left subtree should be the left subtree of the new left subtree root, 
its original right subtree should be the right subtree of the new right subtree root. 
If depth d is 1 that means there is no depth d-1 at all, then create a tree node with 
value v as the new root of the whole original tree, and the original tree is the new 
root's left subtree.
*/

const addOneRow = function(root, v, d) {

  const recurse = (node, depth) => {
    if (!node) {
      if (depth === d) {
        node = new TreeNode(v)
        return node
      } else return node
    }

    let left = recurse(node.left, depth+1)
    let right = recurse(node.right, depth+1)

    if (depth === d) {
      let newLeft = new TreeNode(v)
      newLeft.left = left
      let newRight = new TreeNode(v)
      newRight.right = right
      node.left = newLeft
      node.right = newRight
    }

    return node
  }

  recurse(root, 1)
  return root
}