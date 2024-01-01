import { asserts } from "../../../deps.ts"

import solutions from './main.ts'

const Nums1: number[] = [1, 3]
const Nums2: number[] = [2]
const Output = 3

Deno.test({
  name: "Testing LeetCode #3 solutions.BruteForce()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForce(Nums1, Nums2), Output)
  },
})
