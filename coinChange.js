const change = (coins, target) => {

  let change = [0]
  let ind = 0
  while (ind <= target) {
    change.push(0)
    ind++
  }


  change.forEach((past, i) => {
    if (i !== 0) {
      let possibles = []
      coins.forEach((coin) => {
        if (coin <= i) {
          possibles.push(change[i-coin] + 1)
        }
      })
      change[i] = Math.min(...possibles)
    }
  })

  return change[target] ? change[target] : -1
}

let c = [1, 2, 5]

console.log(change(c, 11))