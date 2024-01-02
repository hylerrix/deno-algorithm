/**
 * Jan 02, 2024 (Tuesday), created by hylerrix
 * Runtime: 172ms, faster than 45.66%
 * Memory Usage: 64.14 MB, smaller than 5.13%
 */
function threeSum(nums: number[]): number[][] {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const ans = []

  for (let first = 0; first < n; first++) {

    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }

    let third = n - 1
    const target = -nums[first]

    for (let second = first + 1; second < n; second++) {

      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      while (second < third && nums[second] + nums[third] > target) {
        third--
      }

      if (second === third) {
        break
      }
      if (nums[second] + nums[third] === target) {
        ans.push([nums[first], nums[second], nums[third]])
      }
    }
  }
  return ans
}

export default threeSum
