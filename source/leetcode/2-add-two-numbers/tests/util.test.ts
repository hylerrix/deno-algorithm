import { assertEquals } from "testing/asserts.ts"
import { Data, Data_1, Data_2, ListData, ListData_1, ListData_2 } from "../utils/data.ts"
import { convertArrayToListNode, converListNodeToArray } from "../utils/util.ts"

Deno.test({
  name: "Testing LeetCode #2 util convertArrayToListNode",
  fn(): void {
    assertEquals(convertArrayToListNode(Data), ListData)
    assertEquals(convertArrayToListNode(Data_1), ListData_1)
    assertEquals(convertArrayToListNode(Data_2), ListData_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 util converListNodeToArray",
  fn(): void {
    assertEquals(converListNodeToArray(ListData), Data)
    assertEquals(converListNodeToArray(ListData_1), Data_1)
    assertEquals(converListNodeToArray(ListData_2), Data_2)
  },
})
