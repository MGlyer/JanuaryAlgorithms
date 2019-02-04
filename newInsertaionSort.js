const insertionSort = (array) => {
    let sorted = [array[0]]

    const recurse = (num) => {
        for (var i = 0; i < sorted.length; i++) {
            let item = sorted[i]
            let prev = sorted[i - 1] || null
            let next = sorted[i + 1] || null
            if (!prev && num < item) sorted.unshift(num)
            else if (!next && num > item) sorted.push(num)
            else if (num > item && num < next) {
                let prevArr = sorted.slice(0, i+1)
                let afterArr = sorted.slice(i+1)
                sorted = prevArr.concat([num], afterArr)
                break
            }
        }
    }

    for (var i = 1; i < array.length; i++) {
        recurse(array[i])
    }

    // const recurse = (num) => {
    //     let minInd = 0
    //     let maxInd = sorted.length
    //     let inserted = false
    //     console.log(num)
    //     while (!inserted) {
    //         let pivot = Math.floor((maxInd+minInd)/2)
    //         let prev = sorted[pivot -1] || 0
    //         let next = sorted[pivot =1] || 10000
    //         if (num < sorted[pivot]) {
    //             if (num > prev) {
    //                 sorted.splice(pivot,0, num)
    //                 inserted = true
    //             }
    //             else maxInd = pivot
    //         } else if (num > sorted[pivot]) {
    //             if (num < next) {
    //                 sorted.splice(pivot+1,0, num)
    //             } else minInd = pivot
    //         }
    //     }
    // }

    // for (var i = 1; i < array.length; i++) {
    //     let item = array[i]
    //     console.log(item)
    //     // recurse(item)
    // }
    return sorted
}
let nums = [1,5,3,10,8,4]
console.log(insertionSort(nums))