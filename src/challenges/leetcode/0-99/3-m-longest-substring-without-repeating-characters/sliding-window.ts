/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Runtime: 108 ms, faster than 88.06% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 43.2 MB, less than 77.46% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Time complexity : O(2n) = O(n). In the worst case each character will be visited twice by ii and jj.
 * Space complexity : O(min(m, n)). Same as the previous approach. We need O(k) space for the sliding window, where  is the size of the Set. The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet mm.
 */
function lengthOfLongestSubstring(s: string): number {
  const n: number = s.length
  const set = new Set()
  let ans= 0, i = 0, j = 0
  while (i < n && j < n) {
    // try to extend the range [i, j]
    if (!set.has(s[j])) {
      set.add(s[j++])
      ans = Math.max(ans, j - i)
    } else {
      set.delete(s[i++])
    }
  }
  return ans
}

export default lengthOfLongestSubstring
