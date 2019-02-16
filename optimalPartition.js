const optimalPartition = (array) => {
  let hist = {}
  let optimal = Infinity

  const recurse = (full, currPNum, lastIndPushed, greatest) => {
    let part = []
    let currCount = 0
    let s = lastIndPushed+1

    for (var i = s; i < array.length; i++) {
      let num = array[i]
      part.push(num)
      full.push(part)
      pCost = currCount + num
      // console.log(full)
      if (currPNum < 5) recurse(full, currPNum+1, i, greatest > pCost ? greatest : pCost)
      full.pop()
    }

    if (currPNum === 5) {
      let string = JSON.stringify(full)
      console.log(string)
      if (!hist[string]) {
        let  result = greatest > pCost ? greatest : pCost
        optimal = result < optimal ? result : optimal
        hist[string] = result
      }
    }
  }

  recurse([], 1, -1, 0)

  console.log(hist)
  return optimal
}

let nums = [5, 2, 11, 12, 8, 7]
console.log(optimalPartition(nums))