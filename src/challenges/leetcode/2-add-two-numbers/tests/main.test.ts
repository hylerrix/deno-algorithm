import { assertEquals } from "testing/asserts.ts"
import { L1, L1_1, L1_2, L2, L2_1, L2_2, Output, Output_1, Output_2 } from "../utils/data.ts"
import ATN from '../main.ts'

Deno.test({
  name: "Testing LeetCode #2 ATN.BruteFunctional()",
  fn(): void {
    assertEquals(ATN.BruteFunctional(L1, L2), Output)
    assertEquals(ATN.BruteFunctional(L1_1, L2_1), Output_1)
    assertEquals(ATN.BruteFunctional(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMath()",
  fn(): void {
    assertEquals(ATN.ElementaryMath(L1, L2), Output)
    assertEquals(ATN.ElementaryMath(L1_1, L2_1), Output_1)
    assertEquals(ATN.ElementaryMath(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMath2()",
  fn(): void {
    assertEquals(ATN.ElementaryMath2(L1, L2), Output)
    assertEquals(ATN.ElementaryMath2(L1_1, L2_1), Output_1)
    assertEquals(ATN.ElementaryMath2(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMath()",
  fn(): void {
    assertEquals(ATN.Recursion(L1, L2), Output)
    assertEquals(ATN.Recursion(L1_1, L2_1), Output_1)
    assertEquals(ATN.Recursion(L1_2, L2_2), Output_2)
  },
})
