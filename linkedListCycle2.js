/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) 
in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
*/

var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) return null
  let t = head.next
  let h = head.next.next

  while (t !== h) {
    t = t.next
    if (!h.next || !h.next.next) return null
    h = h.next.next
  }

  h = head
  while (t !== h) {
    console.log(t.val, h.val)
    t = t.next
    h = h.next
  }
  return h
};