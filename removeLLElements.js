const removeElements = (head, val) => {
  if (!head) return head
  while (head && head.val === val) {
    head = head.next
  }

  let current = head
  while (current) {
    let temp = current.next

    while (temp && temp.val === val) {
      temp = temp.next
    }

    current.next = temp
    curennt = current.next
  }
  return head
}