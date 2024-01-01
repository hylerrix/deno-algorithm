/**
 * Jan 14, 2021 (Thursday), created by hylerrix
 * Runtime: 308 ms, faster than 31.79% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 45.4 MB, less than 42.24% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) { return 0 }
  let curStr = ''
  let max = 1
  for (let i = 0; i < s.length - 1; i++) {
    curStr = s[i]
    let j = 0
    for (j = i + 1; j < s.length; j++) {
      const jIndex: number = curStr.indexOf(s[j])
      // jump i to i+ jIndex, notice i loop will make another 'i++'
      if (jIndex !== -1) {
        i = i + jIndex
        break
      }
      curStr += s[j]
    }
    max = Math.max(curStr.length, max)
    if (j === s.length) { break }
  }
  return max
}

export default lengthOfLongestSubstring
