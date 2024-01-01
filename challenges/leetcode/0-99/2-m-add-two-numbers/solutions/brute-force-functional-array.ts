import { ListNode } from "../utils/interface.ts"
import { convertListNodeToArray, convertArrayToListNode } from "../utils/util.ts"

/**
 * Jan 12, 2021 (Tuesday), created by hylerrix
 * Runtime: 156 ms, faster than 23.39% of TypeScript online submissions for Add Two Numbers.
 * Memory Usage: 47 MB, less than 8.55% of TypeScript online submissions for Add Two Numbers.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const arrL1: number[] = convertListNodeToArray(l1)
  const arrL2: number[] = convertListNodeToArray(l2)

  const [biggerArr, smallerArr] = arrL1.length > arrL2.length
    ? [arrL1, arrL2]
    : [arrL2, arrL1]
  // expand biggerArr and smallerArr with number 0 at the end of array
  biggerArr.push(0)
  for (let i = smallerArr.length; i < biggerArr.length; i++) {
    smallerArr.push(0)
  }
  const answerArr: number[] = []
  // define external prevTens, start to add each digit
  let prevTens = 0
  biggerArr.some((num1, index) => {
    const num2 = smallerArr[index]
    const sum = num1 + num2 + prevTens
    prevTens = parseInt((sum / 10).toString())
    answerArr.push(sum % 10)
  })
  // if end of array item is 0, pop it
  if (!answerArr[answerArr.length - 1]) {
    answerArr.pop()
  }
  return convertArrayToListNode(answerArr)
}

export default addTwoNumbers
