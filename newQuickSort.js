const quickSort = (array) => {
    const recurse = (arr) => {
        if (arr.length <= 1) return arr
        let pIndx = Math.floor(arr.length/2)
        let pivot = arr[pIndx]
        let less = []
        let more = []

        arr.forEach((num, i) => {
            if (i === pIndx) {}
            else if (num < pivot || num === pivot && i < pIndx) {
                less.push(num)
            } else {
                more.push(num)
            }
        })
        return recurse(less).concat([pivot], recurse(more))
    }
    return recurse(array)
}

let numbers = [2,1,10,5,3,8,5]
console.log(quickSort(numbers))