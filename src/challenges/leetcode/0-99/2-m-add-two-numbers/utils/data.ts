
import { ListNode } from "./interface.ts"
import { convertArrayToListNode } from "./util.ts"

export const L1: ListNode | null = convertArrayToListNode([2, 4, 3])
export const L2: ListNode | null = convertArrayToListNode([5, 6, 4])
export const Output: ListNode | null = convertArrayToListNode([7, 0, 8])

export const L1_1: ListNode | null = convertArrayToListNode([0])
export const L2_1: ListNode | null = convertArrayToListNode([0])
export const Output_1: ListNode | null = convertArrayToListNode([0])

export const L1_2: ListNode | null = convertArrayToListNode([9, 9, 9, 9, 9, 9, 9])
export const L2_2: ListNode | null = convertArrayToListNode([9, 9, 9, 9])
export const Output_2: ListNode | null = convertArrayToListNode([8, 9, 9, 9, 0, 0, 0, 1])

export const Data: number[] = []
export const ListData = null
export const Data_1: number[] = [0]
export const ListData_1 = { val: 0, next: null }
export const Data_2: number[] = [1, 2, 3]
export const ListData_2: ListNode = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
