import { ListNode } from "./utils/interface.ts"

/**
 * Wednesday Jan 13, 2021, created by hylerrix
 * Runtime: 136 ms, faster than 66.14% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 46.1 MB, less than 10.57% of JavaScript online submissions for Add Two Numbers.
 */
function addTwoNumbers(l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const next1 = l1 ? l1.next : null
    const next2 = l2 ? l2.next : null
    const val = carry ? val1 + val2 + 1 : val1 + val2
    node = new ListNode(val % 10)
    node.next = addTwoNumbers(next1, next2, val >= 10)
  } else if (carry) {
    node = new ListNode(1)
    node.next = null
  }
  return node
}

export default addTwoNumbers
