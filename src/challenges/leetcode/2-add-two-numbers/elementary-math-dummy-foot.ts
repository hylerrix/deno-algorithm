import { ListNode } from "./utils/interface.ts"

/**
 * Wednesday Jun 16, 2021, created by hylerrix
 * Runtime: 136 ms, faster than 78.59% of TypeScript online submissions for Add Two Numbers.
 * Memory Usage: 45.2 MB, less than 31.46% of TypeScript online submissions for Add Two Numbers.
 * 
 * dummyHead: current chain has a dummy head, answer is dummyHead.next
 * dummyFoot - withOutDummyHead: `current` chain is the answer directly
 *   problem is: don't have a real `next`, need to mock a [ListNode(0)] instead of [ListNode(sum % 10)]
 *   but mocking ListNode(0) caused to a dummyFoot...
 *   because of dummyFoot, `current` can not directly assigned to `current.next` (current.next may be a dummyFoot)
 *     and `if (l1 || l2) { current = current.next }` must after `l1/2 && (l1/2 = l1/2.next)`
 *   finally, if `carry` > 0, dummyFoot replaced with ListNode(carry), otherwise dummyFoot must replace with NULL
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const answerHead = new ListNode(0)
  let current: ListNode = answerHead
  let carry = 0
  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry // const x = p1 ? p1.val : 0
    carry = (sum >= 10) ? 1 : 0 // parseInt(((sum) / 10).toString())
    current.val = sum % 10 // current.next = new ListNode(sum % 10)
    current.next = new ListNode(0)
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    if (l1 || l2) { current = current.next } // current = current.next
  }
  current.next = (carry > 0) ? (current.next = new ListNode(carry)) : null // (carry > 0) && (current.next = new ListNode(carry))
  return answerHead // return dummyHead.next
}

export default addTwoNumbers