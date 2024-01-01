/**
 * Jan 14, 2021 (Thursday), created by hylerrix
 * Runtime: 156 ms, faster than 39.07% of TypeScript online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 45.3 MB, less than 69.30% of TypeScript online submissions for Median of Two Sorted Arrays.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sorted = nums1.concat(nums2).sort((a, b) => a - b)
  const halfLen = parseInt((sorted.length / 2).toString())
  return (sorted.length % 2 === 0)
    ? (sorted[halfLen - 1] + sorted[halfLen]) / 2
    : sorted[halfLen]
}

export default findMedianSortedArrays
