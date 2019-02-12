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
  snakes.forEach((snake) => board.addEdge(...snake))
  ladders.forEach((ladder) => board.addEdge(...ladder))


  //////////
  //actual code to find the optimal path, BFS
  let q = [1]
  let s = 0
  let e = 1
  board.updateCost(1, 0)

  //bfs
  while (s !== e) {
    //for this section of the q
    for (let i = s; i < e; i++) {
      //rename i to square
      let square = q[i]

      //can update this based on game inputs.  2 dice? 1 die?
      let roll = 6
      while (roll > 0) {
        //get the current cost of best path to starting square
        let currCost = board.getCost(square)
        let changed = board.updateCost(square+roll, currCost+1)

        //if we had a better route here, put the newly updated node into the q
        if (changed) q.push(square+roll)

        //retrieve possible moves.  
        let moves = board.edges.get(square)

        //only go to second node if it is higher than the square (aka there is a ladder)
        if (moves.length > 1 && moves[1] > square) {
          let ladderChanged = board.updateCost(moves[1] + roll - 1, currCost+1)
          if (ladderChanged) q.push(moves[1] + roll -1)
        }

        roll--
      }
    }

    s = e
    e = q.length
  }

  return board.getCost(board.numOfSquares)
}