import { ListNode } from "./interface.ts"

export function convertArrayToListNode(inputArr: number[]): ListNode | null {
  if (!inputArr.length) { return null }
  const convertArr: number[] = inputArr.slice().reverse()
  let structureNode: ListNode = new ListNode(convertArr[0])
  convertArr.slice(1).forEach((number: number) => {
    structureNode = {
      val: number,
      next: structureNode
    }
  })
  return structureNode
}

export function convertListNodeToArray(inputNode: ListNode | null): number[] {
  let currentNode: ListNode | null = inputNode
  const stack: number[] = []
  while (currentNode) {
    stack.push(currentNode.val)
    currentNode = currentNode.next
  }
  return stack
}
