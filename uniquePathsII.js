/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

*/

var uniquePathsWithObstacles = function(obstacleGrid) {
  let costMatrix = []
  //initialize the cost matrix
  for (let row of obstacleGrid) {
    let miniRow = []
    for (let col of row) {
      miniRow.push(0)
    }
    costMatrix.push(miniRow)
  }

  costMatrix[0][0] = 1



  for (let r = 0; r < costMatrix.length; r++) {
    for (let c = 0; c < costMatrix[r].length; c++) {
      if (r === 0 && c === 0) continue
      if (obstacleGrid[r][c] !== 1) {
        let left = costMatrix[r][c-1] ? costMatrix[r][c-1] : 0
        let up = costMatrix[r-1] ? costMatrix[r-1][c] : 0
        costMatrix[r][c] = left + up

      }
    }
  }



  return costMatrix[costMatrix.length-1][costMatrix[0].length-1]
};

let matrix = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
let matrix2 = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0]
]

// console.log(uniquePathsWithObstacles(matrix))
// console.log(uniquePathsWithObstacles(matrix2))