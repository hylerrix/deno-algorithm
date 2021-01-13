import { assertEquals } from "testing/asserts.ts"
import { L1, L1_1, L1_2, L2, L2_1, L2_2, Output, Output_1, Output_2 } from "../utils/data.ts"
import AddTwoNumbers from '../main.ts'

Deno.test({
  name: "Testing LeetCode #1 AddTwoNumber.BruteFunctional()",
  fn(): void {
    assertEquals(AddTwoNumbers.BruteFunctional(L1, L2), Output)
    assertEquals(AddTwoNumbers.BruteFunctional(L1_1, L2_1), Output_1)
    assertEquals(AddTwoNumbers.BruteFunctional(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 AddTwoNumber.ElementaryMath()",
  fn(): void {
    assertEquals(AddTwoNumbers.ElementaryMath(L1, L2), Output)
    assertEquals(AddTwoNumbers.ElementaryMath(L1_1, L2_1), Output_1)
    assertEquals(AddTwoNumbers.ElementaryMath(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 AddTwoNumber.ElementaryMath2()",
  fn(): void {
    assertEquals(AddTwoNumbers.ElementaryMath2(L1, L2), Output)
    assertEquals(AddTwoNumbers.ElementaryMath2(L1_1, L2_1), Output_1)
    assertEquals(AddTwoNumbers.ElementaryMath2(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 AddTwoNumber.ElementaryMath()",
  fn(): void {
    assertEquals(AddTwoNumbers.Recursion(L1, L2), Output)
    assertEquals(AddTwoNumbers.Recursion(L1_1, L2_1), Output_1)
    assertEquals(AddTwoNumbers.Recursion(L1_2, L2_2), Output_2)
  },
})
