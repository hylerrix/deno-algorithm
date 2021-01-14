/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Runtime: 120 ms, faster than 68.66% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 41.9 MB, less than 90.45% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  let n: number = s.length, ans: number = 0
  let map = new Map() // current index of character
  // try to extend the range[i, j]
  for (let j: number = 0, i: number = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i)
    }
    ans = Math.max(ans, j - i + 1)
    map.set(s[j], j + 1)
  }
  return ans
}

export default lengthOfLongestSubstring
