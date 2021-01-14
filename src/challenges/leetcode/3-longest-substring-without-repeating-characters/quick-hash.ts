/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Runtime: 120 ms, faster than 68.66% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 45.1 MB, less than 48.36% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) { return s.length }
  let max_len: number = 0
  let curr: number = 0
  let hash: { [key: string]: number } = {} 
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == null) {
      curr += 1
    } else {
      curr = Math.min(i - hash[s[i]], curr + 1)
    }
    max_len = Math.max(max_len, curr)
    hash[s[i]] = i // save the index
  }
  return max_len
}

export default lengthOfLongestSubstring
