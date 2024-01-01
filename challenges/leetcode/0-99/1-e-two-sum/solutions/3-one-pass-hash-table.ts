/**
 * Jan 11, 2021 (Monday), created by hylerrix
 * Runtime: 72 ms, faster than 98.18% of TypeScript online submissions for Two Sum.
 * Memory Usage: 39.2 MB, less than 97.01% of TypeScript online submissions for Two Sum.
 * Time complexity : O(n). We traverse the list containing n elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).
 * Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
 */
function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      answer = [map.get(complement), i]
      break
    }
    map.set(nums[i], i)
  }
  return answer
}

export default twoSum
