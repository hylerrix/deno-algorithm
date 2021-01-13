import { assertEquals } from "testing/asserts.ts"
import { Nums, Nums_1, Nums_2, Target, Target_1, Target_2, Output, Output_1, Output_2 } from '../utils/data.ts'
import TwoSum from '../main.ts'

Deno.test({
  name: "Testing LeetCode #1 TwoSum.BruteForce()",
  fn(): void {
    assertEquals(TwoSum.BruteForce(Nums, Target), Output)
    assertEquals(TwoSum.BruteForce(Nums_1, Target_1), Output_1)
    assertEquals(TwoSum.BruteForce(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum BruteForceFuncional()",
  fn(): void {
    assertEquals(TwoSum.BruteFunctional(Nums, Target), Output)
    assertEquals(TwoSum.BruteFunctional(Nums_1, Target_1), Output_1)
    assertEquals(TwoSum.BruteFunctional(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum TwoPassHashTable()",
  fn(): void {
    assertEquals(TwoSum.TwoPassHashTable(Nums, Target), Output)
    assertEquals(TwoSum.TwoPassHashTable(Nums_1, Target_1), Output_1)
    assertEquals(TwoSum.TwoPassHashTable(Nums_2, Target_2), Output_2)
  },
})

Deno.test({
  name: "Testing LeetCode #1 TwoSum OnePassHashTable()",
  fn(): void {
    assertEquals(TwoSum.OnePassHashTable(Nums, Target), Output)
    assertEquals(TwoSum.OnePassHashTable(Nums_1, Target_1), Output_1)
    assertEquals(TwoSum.OnePassHashTable(Nums_2, Target_2), Output_2)
  },
})
