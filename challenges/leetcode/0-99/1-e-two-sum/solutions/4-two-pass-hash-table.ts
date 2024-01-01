/**
 * Jan 11, 2021 (Monday), created by hylerrix
 * Runtime: 92 ms, faster than 32.45% of TypeScript online submissions for Two Sum.
 * Memory Usage: 40.5 MB, less than 24.08% of TypeScript online submissions for Two Sum.
 * Time complexity : O(n). We traverse the list containing n elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).
 * Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
 */
function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = []
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement) && map.get(complement) !== i) {
      answer = [i, map.get(complement)]
      break
    }
  }
  return answer
}

export default twoSum
