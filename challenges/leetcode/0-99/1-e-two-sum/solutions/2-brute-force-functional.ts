/**
 * Jan 11, 2021 (Monday), created by hylerrix
 * Runtime: 148 ms, faster than 6.56% of TypeScript online submissions for Two Sum.
 * Memory Usage: 45 MB, less than 11.29% of TypeScript online submissions for Two Sum.
 */
function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  nums.forEach((n, index1) => {
    nums.slice(index1 + 1).some((m, index2) => {
      if (n + m === target) {
        answer = [index1, index1 + index2 + 1]
        return true
      }
    })
  })
  return answer
}

export default twoSum
