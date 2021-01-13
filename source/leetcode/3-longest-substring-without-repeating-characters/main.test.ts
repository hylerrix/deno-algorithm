import { assertEquals } from "testing/asserts.ts"
import LSWRC from '../main.ts'

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

Deno.test({
  name: "Testing LeetCode #1 LSWRC.BruteFunctional()",
  fn(): void {
    assertEquals(LSWRC.BruteForce(S), Output)
    assertEquals(LSWRC.BruteForce(S_1), Output_1)
    assertEquals(LSWRC.BruteForce(S_2), Output_2)
    assertEquals(LSWRC.BruteForce(S_3), Output_3)
  },
})
