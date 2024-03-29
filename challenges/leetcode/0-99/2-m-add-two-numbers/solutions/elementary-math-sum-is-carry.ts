import { ListNode } from "../utils/interface.ts"

/**
 * Jan 13, 2021 (Wednesday), created by hylerrix
 * Runtime: 132 ms, faster than 89.19% of TypeScript online submissions for Add Two Numbers.
 * Memory Usage: 44.4 MB, less than 83.55% of TypeScript online submissions for Add Two Numbers.
 * 
 * Specialty: sum is carry
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sum = 0
  let current = new ListNode(0)
  const result = current
  while(l1 || l2) {
    l1 && (sum += l1.val)
    l2 && (sum += l2.val)
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    current.next = new ListNode(sum % 10)
    current = current.next
    sum = sum > 9 ? 1 : 0
  }
  sum && (current.next = new ListNode(sum))
  return result.next
}

export default addTwoNumbers
