const BFS = (root) => {
  let serial = []
  let q = [root]
  let start = 0
  let size = 1

  while (start !== size) {
    //whatever you need to do for each row should go here
    for (var i = start; i < size; i++) {
      let node = q[i]
      serial.push(node.val)
      if (node.left || node.right) {
        q.push(node.left)
        q.push(node.right)
      }
    }
    start = size
    size = q.length
    //whatever else you need done from the BFS
  }

  //any other logic

}