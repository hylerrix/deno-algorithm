import { asserts } from "../../../../deps.ts"

import solutions from './main.ts'

// merged array = [1,2,3] and median is 2.
const Nums1: number[] = [1, 3]
const Nums2: number[] = [2]
const Output = 2.00000

// merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
const Nums1_1: number[] = [1, 2]
const Nums2_1: number[] = [3, 4]
const Output_1 = 2.50000

const Nums1_2: number[] = [0, 0]
const Nums2_2: number[] = [0, 0]
const Output_2 = 0.00000

const Nums1_3: number[] = []
const Nums2_3: number[] = [1]
const Output_3 = 1.00000

const Nums1_4: number[] = [2]
const Nums2_4: number[] = []
const Output_4 = 2

Deno.test({
  name: "Testing LeetCode #3 solutions.BruteForce()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceFunctional(Nums1, Nums2), Output)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums1_1, Nums2_1), Output_1)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums1_2, Nums2_2), Output_2)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums1_3, Nums2_3), Output_3)
    asserts.assertEquals(solutions.BruteForceFunctional(Nums1_4, Nums2_4), Output_4)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.RecursiveApproach()",
  fn(): void {
    asserts.assertEquals(solutions.RecursiveApproach(Nums1, Nums2), Output)
    asserts.assertEquals(solutions.RecursiveApproach(Nums1_1, Nums2_1), Output_1)
    asserts.assertEquals(solutions.RecursiveApproach(Nums1_2, Nums2_2), Output_2)
    asserts.assertEquals(solutions.RecursiveApproach(Nums1_3, Nums2_3), Output_3)
    asserts.assertEquals(solutions.RecursiveApproach(Nums1_4, Nums2_4), Output_4)
  },
})
