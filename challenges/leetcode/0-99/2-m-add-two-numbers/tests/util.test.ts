import { asserts } from "../../../../../deps.ts"

import { Data, Data_1, Data_2, ListData, ListData_1, ListData_2 } from "../utils/data.ts"
import { convertArrayToListNode, convertListNodeToArray } from "../utils/util.ts"

Deno.test({
  name: "Testing LeetCode #2 util convertArrayToListNode",
  fn(): void {
    asserts.assertEquals(convertArrayToListNode(Data), ListData)
    asserts.assertEquals(convertArrayToListNode(Data_1), ListData_1)
    asserts.assertEquals(convertArrayToListNode(Data_2), ListData_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 util convertListNodeToArray",
  fn(): void {
    asserts.assertEquals(convertListNodeToArray(ListData), Data)
    asserts.assertEquals(convertListNodeToArray(ListData_1), Data_1)
    asserts.assertEquals(convertListNodeToArray(ListData_2), Data_2)
  },
})
