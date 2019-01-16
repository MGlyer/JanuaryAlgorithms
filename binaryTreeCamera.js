/*
Given a binary tree, we install cameras on the nodes of the tree. 

Each camera at a node can monitor its parent, itself, and its immediate children.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.
*/

const binaryTreeCamera = (tree) => {
  let count = 0;

  const recurse = (node) => {
    if (!node) return
    let left = recurse(node.left)
    let right = recurse (node.right)
    let leftStatus
    let rightStatus

    if (left.hasOwnProperty(camera)) leftStatus = 'camera'
    if (left.hasOwnProperty(watched)) leftStatus = 'watched'
    if (right.hasOwnProperty(camera)) rightStatus = 'camera'
    if (right.hasOwnProperty(watched)) rightStatus = 'watched'
    if ((!leftStatus === 'camera' || !leftStatus === 'watched') &&
      (!rightStatus === 'camera' || !rightStatus === 'watched')) {
        node.camera = true
        count++
      } else if (rightStatus === 'camera' || leftStatus === 'camera') {
        node.watched = true
      }

    return node
  }

  recurse(tree)
  return count
}