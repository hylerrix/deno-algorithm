/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Runtime: 156 ms, faster than 39.07% of TypeScript online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 45.3 MB, less than 69.30% of TypeScript online submissions for Median of Two Sorted Arrays.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let length = nums1.length + nums2.length
  const even = (length % 2) ? false : true
  length = Math.floor(length / 2)

  let i = 0, j = 0, prev = 0, curr = 0
  while((i+j) <= length) {
      prev = curr
      if (nums1[i] != undefined && nums2[j] != undefined) {
        curr = (nums1[i] < nums2[j]) ? nums1[i++] : nums2[j++]
      } else {
        curr = (nums1[i] != undefined) ? nums1[i++] : nums2[j++]
      }
  }

  return even ? (prev + curr) / 2 : curr
}

export default findMedianSortedArrays
