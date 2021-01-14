/**
 * Thursday Jan 14, 2021, created by hylerrix
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/632177
 * Runtime: 136 ms, faster than 52.69% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 44.3 MB, less than 65.22% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  const { length } = s
  if (length < 2) return length
  let max: number = 0
  const history: { [key: string]: number } = {}
  let start: number = 0
  for (let end = 0; end < length; end++) {
    const char: string = s[end]
    
    const pi: number = history[char]
    if (pi !== undefined && pi >= start)
      start = pi + 1
    
    const current: number = end - start + 1
    history[char] = end
    if (current > max) max = current
  }
  return max
}

export default lengthOfLongestSubstring
