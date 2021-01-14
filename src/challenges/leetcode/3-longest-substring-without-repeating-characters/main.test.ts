import { assertEquals } from "testing/asserts.ts"
import LSWRC from './main.ts'

// The answer is "abc", with the length of 3.
const S: string = 'abcabcbb'
const Output: number = 3

// The answer is "b", with the length of 1.
const S_1: string = 'bbbbb'
const Output_1: number = 1

// The answer is "wke", with the length of 3.
const S_2: string = 'pwwkew'
const Output_2: number = 3

const S_3: string = ''
const Output_3: number = 0

const S_4: string = 'abcad'
const Output_4: number = 4

const S_5: string = 'abcbd'
const Output_5: number = 3

const S_6: string = 'abcdbcafog'
const Output_6: number = 7

const S_7: string = ' '
const Output_7: number = 1

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.BruteForce()",
//   fn(): void {
//     assertEquals(LSWRC.BruteForceIndexOf(S), Output)
//     assertEquals(LSWRC.BruteForceIndexOf(S_1), Output_1)
//     assertEquals(LSWRC.BruteForceIndexOf(S_2), Output_2)
//     assertEquals(LSWRC.BruteForceIndexOf(S_3), Output_3)
//     assertEquals(LSWRC.BruteForceIndexOf(S_4), Output_4)
//     assertEquals(LSWRC.BruteForceIndexOf(S_5), Output_5)
//     assertEquals(LSWRC.BruteForceIndexOf(S_6), Output_6)
//     assertEquals(LSWRC.BruteForceIndexOf(S_7), Output_7)
//   },
// })

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.BruteForceOptimized()",
//   fn(): void {
//     assertEquals(LSWRC.BruteForceOptimized(S), Output)
//     assertEquals(LSWRC.BruteForceOptimized(S_1), Output_1)
//     assertEquals(LSWRC.BruteForceOptimized(S_2), Output_2)
//     assertEquals(LSWRC.BruteForceOptimized(S_3), Output_3)
//     assertEquals(LSWRC.BruteForceOptimized(S_4), Output_4)
//     assertEquals(LSWRC.BruteForceOptimized(S_5), Output_5)
//     assertEquals(LSWRC.BruteForceOptimized(S_6), Output_6)
//     assertEquals(LSWRC.BruteForceOptimized(S_7), Output_7)
//   },
// })

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.BruteForceHashset()",
//   fn(): void {
//     assertEquals(LSWRC.BruteForceHashset(S), Output)
//     assertEquals(LSWRC.BruteForceHashset(S_1), Output_1)
//     assertEquals(LSWRC.BruteForceHashset(S_2), Output_2)
//     assertEquals(LSWRC.BruteForceHashset(S_3), Output_3)
//     assertEquals(LSWRC.BruteForceHashset(S_4), Output_4)
//     assertEquals(LSWRC.BruteForceHashset(S_5), Output_5)
//     assertEquals(LSWRC.BruteForceHashset(S_6), Output_6)
//     assertEquals(LSWRC.BruteForceHashset(S_7), Output_7)
//   },
// })

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.SlidingWindow()",
//   fn(): void {
//     assertEquals(LSWRC.SlidingWindow(S), Output)
//     assertEquals(LSWRC.SlidingWindow(S_1), Output_1)
//     assertEquals(LSWRC.SlidingWindow(S_2), Output_2)
//     assertEquals(LSWRC.SlidingWindow(S_3), Output_3)
//     assertEquals(LSWRC.SlidingWindow(S_4), Output_4)
//     assertEquals(LSWRC.SlidingWindow(S_5), Output_5)
//     assertEquals(LSWRC.SlidingWindow(S_6), Output_6)
//     assertEquals(LSWRC.SlidingWindow(S_7), Output_7)
//   },
// })

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.SlidingWindowOptimized()",
//   fn(): void {
//     assertEquals(LSWRC.SlidingWindowOptimized(S), Output)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_1), Output_1)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_2), Output_2)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_3), Output_3)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_4), Output_4)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_5), Output_5)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_6), Output_6)
//     assertEquals(LSWRC.SlidingWindowOptimized(S_7), Output_7)
//   },
// })

// Deno.test({
//   name: "Testing LeetCode #1 LSWRC.QuickHash()",
//   fn(): void {
//     assertEquals(LSWRC.QuickHash(S), Output)
//     assertEquals(LSWRC.QuickHash(S_1), Output_1)
//     assertEquals(LSWRC.QuickHash(S_2), Output_2)
//     assertEquals(LSWRC.QuickHash(S_3), Output_3)
//     assertEquals(LSWRC.QuickHash(S_4), Output_4)
//     assertEquals(LSWRC.QuickHash(S_5), Output_5)
//     assertEquals(LSWRC.QuickHash(S_6), Output_6)
//     assertEquals(LSWRC.QuickHash(S_7), Output_7)
//   },
// })