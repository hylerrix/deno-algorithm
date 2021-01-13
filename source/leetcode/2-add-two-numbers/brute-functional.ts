import { ListNode } from "./utils/interface.ts"
import { converListNodeToArray, convertArrayToListNode } from "./utils/util.ts"

/**
 * Tuesday Jan 12, 2021, created by hylerrix
 * Runtime: 156 ms, faster than 23.39% of TypeScript online submissions for Add Two Numbers.
 * Memory Usage: 47 MB, less than 8.55% of TypeScript online submissions for Add Two Numbers.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) { return null }
  const arrL1: number[] = converListNodeToArray(l1)
  const arrL2: number[] = converListNodeToArray(l2)

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
    const digit = (num1 + num2) % 10
    // according previous prevTens, calculate current digit and push to answerArr
    if (prevTens && digit !== 9) {
      answerArr.push(digit + prevTens)
      prevTens = 0
    } else if (prevTens && digit === 9) {
      answerArr.push(0)
      prevTens = 1
    } else {
      answerArr.push(digit)
      prevTens = 0
    }
    // caculate prevTens for next loop
    prevTens = parseInt(((num1 + num2 + prevTens) / 10).toString())
  })
  // if end of array item is 0, pop it
  if (!answerArr[answerArr.length - 1]) {
    answerArr.pop()
  }
  return convertArrayToListNode(answerArr)
}

export default addTwoNumbers
