import { assertEquals } from "testing/asserts.ts"
import TwoSum from './main.ts'

const nums: number[] = [2, 7, 11, 15]
const target: number = 9
const output: number[] = [0, 1]

const nums_1: number[] = [3, 2, 4]
const target_1: number = 6
const output_1: number[] = [1, 2]

const nums_2: number[] = [3, 3]
const target_2: number = 6
const output_2: number[] = [0, 1]

Deno.test({
  name: "Testing LeetCode #1 TwoSum.BruteForce()",
  fn(): void {
    assertEquals(TwoSum.BruteForce(nums, target), output)
    assertEquals(TwoSum.BruteForce(nums_1, target_1), output_1)
    assertEquals(TwoSum.BruteForce(nums_2, target_2), output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum BruteForceFuncional()",
  fn(): void {
    assertEquals(TwoSum.BruteForceFuncional(nums, target), output)
    assertEquals(TwoSum.BruteForceFuncional(nums_1, target_1), output_1)
    assertEquals(TwoSum.BruteForceFuncional(nums_2, target_2), output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum TwoPassHashTable()",
  fn(): void {
    assertEquals(TwoSum.TwoPassHashTable(nums, target), output)
    assertEquals(TwoSum.TwoPassHashTable(nums_1, target_1), output_1)
    assertEquals(TwoSum.TwoPassHashTable(nums_2, target_2), output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum OnePassHashTable()",
  fn(): void {
    assertEquals(TwoSum.OnePassHashTable(nums, target), output)
    assertEquals(TwoSum.OnePassHashTable(nums_1, target_1), output_1)
    assertEquals(TwoSum.OnePassHashTable(nums_2, target_2), output_2)
  },
})
