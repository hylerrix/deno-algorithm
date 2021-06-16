/**
 * Monday Jan 11, 2021, created by hylerrix
 * Updated in Wednesday Jun 16, 2021, by hylerrix
 * Runtime: 116 ms, faster than 30.77% of TypeScript online submissions for Two Sum.
 * Memory Usage: 40.9 MB, less than 33.47% of TypeScript online submissions for Two Sum.
 * Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2).
 * Space complexity : O(1).
 */
function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer = [i, j]
        break
      }
    }
  }
  return answer
}

export default twoSum
