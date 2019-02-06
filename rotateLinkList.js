/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/

var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let vals = []
  let length = 0

  let curr = head
  while (curr) {
      length++
      curr = curr.next
  }
    
  curr = head
  let d = k > length ? k % length : k
  
  while (curr) {
    vals.push(curr.val)
    if (vals.length === d+1) {
      let newVal = vals.shift()
      curr.val = newVal
    }
    curr = curr.next
  }

  curr = head
  while (vals.length > 0) {
    curr.val = vals.shift()
    curr = curr.next
  }

  return head
};