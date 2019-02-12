/* find the least number of rolls needed to reach the end of a board of Snakes and Ladders */

class Graph {
  constructor(numOfSquares) {
    this.numOfSquares = numOfSquares
    this.edges = new Map
    this.costs = new Map
  }

  addNode (node) {
    this.edges.set(node, [])
  }

  addEdge(node, target) {
    this.edges.get(node).push(target)
  }

  getCost(node) {
    return this.costs.get(node)
  }

  updateCost(node, newCost) {
    let curr = getCost(node)
    if (!curr || newCost < curr) {
      this.costs.set(node, newCost)
      return true
    }
    return false
  }
}

const optimalGame = (boardSize, snakes, ladders) => {
  //set up game board
  let board = new Graph(boardSize)

  //initialize nodes
  for (let i = 1; i <= boardSize; i++) {
    board.addNode(i)
    board.addEdge(i, i+1)
  }

  //add alternate edges
  snakes.forEach((snake) => board.addEdge(snake[0], snake[1]))
  ladders.forEach((ladder) => board.addEdge(ladder[0], ladder[1]))

  //actual code
}