/*
this assumes a graph with no negative cost to move from one node to another.
each node looks like:

node.label = label
node.neighbors = [neighbor1, ...]
node.costToMove = [costToMoveToNeighbor1, ...]
*/

const graphTrav = (graph, start, target) => {

  //dfs version
  start.cost = 0
  const dfs = (node) => {
    neighbors.forEach((neighbor, i) => {
      let costToMove = node.costToMove[i]
      let costAfterMove = costToMove + node.cost
      if (!neighbor.cost || neighbor.cost > costAfterMove) {
        neighbor.cost = costAfterMove
        if (neighbor !== target) dfs(neighbor)
      }
    })
  }

  dfs(start)
  return target.cost

  //bfs version
  start.cost = 0
  let q = [start]
  let start = 0
  let end = 1

  while (start !== end) {
    for (var i = start; i < end; i++) {
      let node = q[i]
      node.neighbors.forEach((neighbor, i) => {
        let costToMove = node.costToMove[i]
        let costAfterMove = costToMove + node.cost
        if (!neighbor.cost || neighber.cost > costAfterMove) {
          neighbor.cost = costAfterMove
          if (neighbor !== target) q.push(node)
        }
      })
    }

    let start = end
    let end = q.length
  }

  return target.cost
}