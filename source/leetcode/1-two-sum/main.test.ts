import { assertEquals } from "testing/asserts.ts"
import TW from './main.ts'

const Nums: number[] = [2, 7, 11, 15]
const Target: number = 9
const Output: number[] = [0, 1]

const Nums_1: number[] = [3, 2, 4]
const Target_1: number = 6
const Output_1: number[] = [1, 2]

const Nums_2: number[] = [3, 3]
const Target_2: number = 6
const Output_2: number[] = [0, 1]

Deno.test({
  name: "Testing LeetCode #1 TW.BruteForce()",
  fn(): void {
    assertEquals(TW.BruteForce(Nums, Target), Output)
    assertEquals(TW.BruteForce(Nums_1, Target_1), Output_1)
    assertEquals(TW.BruteForce(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TW BruteForceFuncional()",
  fn(): void {
    assertEquals(TW.BruteFunctional(Nums, Target), Output)
    assertEquals(TW.BruteFunctional(Nums_1, Target_1), Output_1)
    assertEquals(TW.BruteFunctional(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TW TwoPassHashTable()",
  fn(): void {
    assertEquals(TW.TwoPassHashTable(Nums, Target), Output)
    assertEquals(TW.TwoPassHashTable(Nums_1, Target_1), Output_1)
    assertEquals(TW.TwoPassHashTable(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TW OnePassHashTable()",
  fn(): void {
    assertEquals(TW.OnePassHashTable(Nums, Target), Output)
    assertEquals(TW.OnePassHashTable(Nums_1, Target_1), Output_1)
    assertEquals(TW.OnePassHashTable(Nums_2, Target_2), Output_2)
  },
})
