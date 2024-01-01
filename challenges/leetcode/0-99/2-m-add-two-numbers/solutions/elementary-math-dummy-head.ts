import { ListNode } from "../utils/interface.ts"

/**
 * Wednesday Jan 13, 2021, created by hylerrix
 * Runtime: 156 ms, faster than 23.39% of TypeScript online submissions for Add Two Numbers.
 * Memory Usage: 45.8 MB, less than 16.13% of TypeScript online submissions for Add Two Numbers.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead: ListNode = new ListNode(0)
  let current: ListNode | null = dummyHead
  let p1: ListNode | null = l1
  let p2: ListNode | null = l2
  let carry = 0
  while (p1 || p2) {
    const x = p1 ? p1.val : 0
    const y = p2 ? p2.val : 0
    const sum = carry + x + y
    carry = parseInt(((sum) / 10).toString())
    current.next = new ListNode(sum % 10)
    current = current.next
    p1 && (p1 = p1.next)
    p2 && (p2 = p2.next)
  }
  (carry > 0) && (current.next = new ListNode(carry))
  return dummyHead.next
}

export default addTwoNumbers
