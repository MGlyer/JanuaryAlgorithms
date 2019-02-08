/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

const uniquePaths = (m, n) => {
  let board = []
  for (var i = 0; i < m; i++) {
    let row = []
    for (var r = 0; r < n; r++) {
      row.push(0)
    }
    board.push(row)
  }

  board[0][0] =1

  board.forEach((row, r) => {
    row.forEach((col, c) => {
      let up = board[r-1] ? board[r-1][c] : 0
      let left = board[r][c-1] ? board[r][c-1] : 0
      board[r][c] = up + left + board[r][c]
    })
  })

  return board[m-1][n-1]
}