/**
 * Thursday Jan 14, 2021, created by hylerrix
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/216209
 * Runtime: 100 ms, faster than 96.57% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 42.1 MB, less than 86.57% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  const length: number = s.length
  if (length <= 1) {
    return length
  }
  let p = 0
  let q = 1
  let result = 1
  while (q < length) {
    const sub = s.slice(p, q)
    const i = sub.indexOf(s[q])
    if (i !== -1) {
      p = p + i + 1
    }
    q++
    result = q - p > result ? q - p : result
  }
  return result
}

export default lengthOfLongestSubstring
