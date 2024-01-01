import { asserts } from "../../../../../deps.ts"

import { L1, L1_1, L1_2, L2, L2_1, L2_2, Output, Output_1, Output_2 } from "../utils/data.ts"

import solutions from '../main.ts'

Deno.test({
  name: "Testing LeetCode #2 solutions.BruteForceFunctionalArray()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceFunctionalArray(L1, L2), Output)
    asserts.assertEquals(solutions.BruteForceFunctionalArray(L1_1, L2_1), Output_1)
    asserts.assertEquals(solutions.BruteForceFunctionalArray(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 solutions.ElementaryMathDummyHead()",
  fn(): void {
    asserts.assertEquals(solutions.ElementaryMathDummyHead(L1, L2), Output)
    asserts.assertEquals(solutions.ElementaryMathDummyHead(L1_1, L2_1), Output_1)
    asserts.assertEquals(solutions.ElementaryMathDummyHead(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 solutions.ElementaryMathDummyFoot()",
  fn(): void {
    asserts.assertEquals(solutions.ElementaryMathDummyFoot(L1, L2), Output)
    asserts.assertEquals(solutions.ElementaryMathDummyFoot(L1_1, L2_1), Output_1)
    asserts.assertEquals(solutions.ElementaryMathDummyFoot(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 solutions.ElementaryMath2()",
  fn(): void {
    asserts.assertEquals(solutions.ElementaryMathSumIsCarry(L1, L2), Output)
    asserts.assertEquals(solutions.ElementaryMathSumIsCarry(L1_1, L2_1), Output_1)
    asserts.assertEquals(solutions.ElementaryMathSumIsCarry(L1_2, L2_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #2 solutions.ArgumentsRecursion()",
  fn(): void {
    asserts.assertEquals(solutions.ArgumentsRecursion(L1, L2), Output)
    asserts.assertEquals(solutions.ArgumentsRecursion(L1_1, L2_1), Output_1)
    asserts.assertEquals(solutions.ArgumentsRecursion(L1_2, L2_2), Output_2)
  },
})

