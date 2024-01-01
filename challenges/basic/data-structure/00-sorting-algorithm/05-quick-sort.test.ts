import { asserts } from "../../../../deps.ts"
import { quickSort } from './05-quick-sort.ts'

const input = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const expect = [2,  3,  4,  5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
const input_01 = [1, 5, 3, 4, 2, 6, 7]
const expect_01 = [1, 2, 3, 4, 5, 6, 7]
const input_02 = [1, 999, 3, 7, 5, 233]
const expect_02 = [1, 3, 5, 7, 233, 999]

Deno.test({
  name: "Testing quickSort()",
  fn(): void {
    asserts.assertEquals(quickSort(input), expect)
    asserts.assertEquals(quickSort(input_01), expect_01)
    asserts.assertEquals(quickSort(input_02), expect_02)
  },
})
