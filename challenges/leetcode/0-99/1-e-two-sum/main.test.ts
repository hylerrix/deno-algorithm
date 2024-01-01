import { asserts } from "../../../../deps.ts"

import solutions from './main.ts'

const Nums: number[] = [2, 7, 11, 15]
const Target = 9
const Output: number[] = [0, 1]

const Nums_1: number[] = [3, 2, 4]
const Target_1 = 6
const Output_1: number[] = [1, 2]

const Nums_2: number[] = [3, 3]
const Target_2 = 6
const Output_2: number[] = [0, 1]

Deno.test({
  name: "Testing LeetCode #1 solutions.BruteForce()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForce(Nums, Target), Output)
    asserts.assertEquals(solutions.BruteForce(Nums_1, Target_1), Output_1)
    asserts.assertEquals(solutions.BruteForce(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 solutions.BruteForceFuncional()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceFunctional(Nums, Target), Output)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums_1, Target_1), Output_1)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 solutions.TwoPassHashTable()",
  fn(): void {
    asserts.assertEquals(solutions.TwoPassHashTable(Nums, Target), Output)
    asserts.assertEquals(solutions.TwoPassHashTable(Nums_1, Target_1), Output_1)
    asserts.assertEquals(solutions.TwoPassHashTable(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 solutions.OnePassHashTable()",
  fn(): void {
    asserts.assertEquals(solutions.OnePassHashTable(Nums, Target), Output)
    asserts.assertEquals(solutions.OnePassHashTable(Nums_1, Target_1), Output_1)
    asserts.assertEquals(solutions.OnePassHashTable(Nums_2, Target_2), Output_2)
  },
})
