/**
 * Jan 02, 2024 (Tuesday), created by hylerrix
 * Idea: if Math.min and Math.max is a high cost, we can use nextLeft to find bigger left then calculate, netRight is the same.
 * Runtime: 60 ms, faster than 99.69% of TypeScript user
 * Memory Usage: 57.75 MB, smaller than 5.09% of TypeScript user
 */
function maxArea(height: number[]): number {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, area)
    if (height[left] < height[right]) {
      left += 1
    } else {
      right -= 1
    }
  }
  return max
}

export default maxArea
