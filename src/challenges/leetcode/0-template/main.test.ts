import { assertEquals } from "testing/asserts.ts"
import MOTSA from './main.ts'

// The answer is "abc", with the length of 3.
const Nums1: number[] = [1, 3]
const Nums2: number[] = [2]
const Output = 2.00000

Deno.test({
  name: "Testing LeetCode #3 LSWRC.BruteForce()",
  fn(): void {
    assertEquals(MOTSA.BruteForce(Nums1, Nums2), Output)
  },
})
