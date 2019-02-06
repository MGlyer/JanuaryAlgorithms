var splitListToParts = function(root, k) {
  let current = root
  let size = 0
  while(current) {
    size++
    current = current.next
  }

  let extra = size % k
  let output = []
  let count = 0

  let current = root

  while (current) {
    let newList = new ListNode(current.val)
    count++
    if (extra) {
      count--
      extra--
    }
    let list = newList
    while (count < Math.floor(size/k)) {
      list = list.next
      current = current.next
      list.val = current.val
    }

    count = 0
    output.push(newList)
  }

  return output
};