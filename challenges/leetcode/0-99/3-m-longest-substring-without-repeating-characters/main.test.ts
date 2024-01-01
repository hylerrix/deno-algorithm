import { asserts } from "../../../../deps.ts"

import solutions from './main.ts'

// The answer is "abc", with the length of 3.
const S = 'abcabcbb'
const Output = 3

// The answer is "b", with the length of 1.
const S_1 = 'bbbbb'
const Output_1 = 1

// The answer is "wke", with the length of 3.
const S_2 = 'pwwkew'
const Output_2 = 3

const S_3 = ''
const Output_3 = 0

const S_4 = 'abcad'
const Output_4 = 4

const S_5 = 'abcbd'
const Output_5 = 3

const S_6 = 'abcdbdafog'
const Output_6 = 6

const S_7 = ' '
const Output_7 = 1

Deno.test({
  name: "Testing LeetCode #3 solutions.BruteForce()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceIndexOf(S), Output)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_1), Output_1)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_2), Output_2)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_3), Output_3)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_4), Output_4)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_5), Output_5)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_6), Output_6)
    asserts.assertEquals(solutions.BruteForceIndexOf(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.BruteForceOptimized()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceOptimized(S), Output)
    asserts.assertEquals(solutions.BruteForceOptimized(S_1), Output_1)
    asserts.assertEquals(solutions.BruteForceOptimized(S_2), Output_2)
    asserts.assertEquals(solutions.BruteForceOptimized(S_3), Output_3)
    asserts.assertEquals(solutions.BruteForceOptimized(S_4), Output_4)
    asserts.assertEquals(solutions.BruteForceOptimized(S_5), Output_5)
    asserts.assertEquals(solutions.BruteForceOptimized(S_6), Output_6)
    asserts.assertEquals(solutions.BruteForceOptimized(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.BruteForceHashSet()",
  fn(): void {
    asserts.assertEquals(solutions.BruteForceHashSet(S), Output)
    asserts.assertEquals(solutions.BruteForceHashSet(S_1), Output_1)
    asserts.assertEquals(solutions.BruteForceHashSet(S_2), Output_2)
    asserts.assertEquals(solutions.BruteForceHashSet(S_3), Output_3)
    asserts.assertEquals(solutions.BruteForceHashSet(S_4), Output_4)
    asserts.assertEquals(solutions.BruteForceHashSet(S_5), Output_5)
    asserts.assertEquals(solutions.BruteForceHashSet(S_6), Output_6)
    asserts.assertEquals(solutions.BruteForceHashSet(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.SlidingWindow()",
  fn(): void {
    asserts.assertEquals(solutions.SlidingWindow(S), Output)
    asserts.assertEquals(solutions.SlidingWindow(S_1), Output_1)
    asserts.assertEquals(solutions.SlidingWindow(S_2), Output_2)
    asserts.assertEquals(solutions.SlidingWindow(S_3), Output_3)
    asserts.assertEquals(solutions.SlidingWindow(S_4), Output_4)
    asserts.assertEquals(solutions.SlidingWindow(S_5), Output_5)
    asserts.assertEquals(solutions.SlidingWindow(S_6), Output_6)
    asserts.assertEquals(solutions.SlidingWindow(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.SlidingWindowOptimized()",
  fn(): void {
    asserts.assertEquals(solutions.SlidingWindowOptimized(S), Output)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_1), Output_1)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_2), Output_2)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_3), Output_3)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_4), Output_4)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_5), Output_5)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_6), Output_6)
    asserts.assertEquals(solutions.SlidingWindowOptimized(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.QuickHash()",
  fn(): void {
    asserts.assertEquals(solutions.QuickHash(S), Output)
    asserts.assertEquals(solutions.QuickHash(S_1), Output_1)
    asserts.assertEquals(solutions.QuickHash(S_2), Output_2)
    asserts.assertEquals(solutions.QuickHash(S_3), Output_3)
    asserts.assertEquals(solutions.QuickHash(S_4), Output_4)
    asserts.assertEquals(solutions.QuickHash(S_5), Output_5)
    asserts.assertEquals(solutions.QuickHash(S_6), Output_6)
    asserts.assertEquals(solutions.QuickHash(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.QuickHashIntuitive()",
  fn(): void {
    asserts.assertEquals(solutions.QuickHashIntuitive(S), Output)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_1), Output_1)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_2), Output_2)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_3), Output_3)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_4), Output_4)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_5), Output_5)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_6), Output_6)
    asserts.assertEquals(solutions.QuickHashIntuitive(S_7), Output_7)
  },
})

Deno.test({
  name: "Testing LeetCode #3 solutions.QuickPointer()",
  fn(): void {
    asserts.assertEquals(solutions.QuickPointer(S), Output)
    asserts.assertEquals(solutions.QuickPointer(S_1), Output_1)
    asserts.assertEquals(solutions.QuickPointer(S_2), Output_2)
    asserts.assertEquals(solutions.QuickPointer(S_3), Output_3)
    asserts.assertEquals(solutions.QuickPointer(S_4), Output_4)
    asserts.assertEquals(solutions.QuickPointer(S_5), Output_5)
    asserts.assertEquals(solutions.QuickPointer(S_6), Output_6)
    asserts.assertEquals(solutions.QuickPointer(S_7), Output_7)
  },
})
