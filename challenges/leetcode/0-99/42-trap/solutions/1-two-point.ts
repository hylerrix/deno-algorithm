/**
 * Jan 01, 2024 (Monday), created by hylerrix
 * Runtime: 72ms, faster than 74.66%
 * Memory Usage: 51.09MB, less than 7.54%
 */
function trap(height: number[]): number {
  let ans = 0
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      ans += leftMax - height[left]
      ++left
    } else {
      ans += rightMax - height[right]
      --right
    }
  }
  return ans
}

export default trap
