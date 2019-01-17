/*
#968
Given a binary tree, we install cameras on the nodes of the tree. 

Each camera at a node can monitor its parent, itself, and its immediate children.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.
*/

const binaryTreeCamera = (root) => {
  let count = 0;

  const recurse = (node) => {
    if (!node) return
    node.status = 0
    if(!node.left && !node.right) return node
    let left = recurse(node.left)
    let right = recurse (node.right)

    if (left && !right) {
      if (left.status < 1) {
        node.status = 2
        count++
      }
    } else if (right && !left) {
      if (right.status < 1) {
        node.status = 2
        count++
      }
    } else if (left && right) {
      if (left.status < 1 || right.status < 1) {
        node.status = 2
        count++
      }
    }

    if (node.staus < 1) {
      if (left && left.status === 2 || right && right.status === 2) {
        node.status += 1
      }
    }

    // if (left && !right) {
    //   if ((!left.hasOwnProperty('camera') || !left.hasOwnProperty('watched'))) {
    //     node.camera = true
    //     count++
    //   } else if (left.hasOwnProperty('camera')) node.watched = true
    // } else if (right && !left) {
    //   if ((!right.hasOwnProperty('camera') || !right.hasOwnProperty('watched'))) {
    //     node.camera = true
    //     count++
    //   } else if (right.hasOwnProperty('camera')) node.watched = true
    // } else if (left && right) {
    //   if ((!left.hasOwnProperty('camera') || !left.hasOwnProperty('watched')) &&
    //     (!right.hasOwnProperty('camera') || !right.hasOwnProperty('watched'))) {
    //       node.camera = true
    //       count++
    //     } else if (left.hasOwnProperty('camera') || right.hasOwnProperty('camera')) {
    //       node.watched = true
    //     }
    // }
    

    return node
  }

  recurse(root)

  if (root.status < 1) count++
  return count
}