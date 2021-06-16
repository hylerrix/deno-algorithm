import { assertEquals } from "testing/asserts.ts"
import { L1, L1_1, L1_2, L2, L2_1, L2_2, Output, Output_1, Output_2 } from "../utils/data.ts"
import ATN from '../main.ts'

Deno.test({
  name: "Testing LeetCode #2 ATN.BruteForceFunctionalArray()",
  fn(): void {
    assertEquals(ATN.BruteForceFunctionalArray(L1, L2), Output)
    assertEquals(ATN.BruteForceFunctionalArray(L1_1, L2_1), Output_1)
    assertEquals(ATN.BruteForceFunctionalArray(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMathDummyHead()",
  fn(): void {
    assertEquals(ATN.ElementaryMathDummyHead(L1, L2), Output)
    assertEquals(ATN.ElementaryMathDummyHead(L1_1, L2_1), Output_1)
    assertEquals(ATN.ElementaryMathDummyHead(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMathDummyFoot()",
  fn(): void {
    assertEquals(ATN.ElementaryMathDummyFoot(L1, L2), Output)
    assertEquals(ATN.ElementaryMathDummyFoot(L1_1, L2_1), Output_1)
    assertEquals(ATN.ElementaryMathDummyFoot(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ElementaryMath2()",
  fn(): void {
    assertEquals(ATN.ElementaryMathSumIsCarry(L1, L2), Output)
    assertEquals(ATN.ElementaryMathSumIsCarry(L1_1, L2_1), Output_1)
    assertEquals(ATN.ElementaryMathSumIsCarry(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 ATN.ArgumentsRecursion()",
  fn(): void {
    assertEquals(ATN.ArgumentsRecursion(L1, L2), Output)
    assertEquals(ATN.ArgumentsRecursion(L1_1, L2_1), Output_1)
    assertEquals(ATN.ArgumentsRecursion(L1_2, L2_2), Output_2)
  },
})

