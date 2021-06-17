/**
 * Thursday Jan 14, 2021, created by hylerrix
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/259555
 * Runtime: 120 ms, faster than 68.66% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 45.1 MB, less than 48.36% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) { return s.length }
  let curr = 0
  let maxLen = 0
  const hash: { [key: string]: number } = {} 
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == null) {
      curr += 1
    } else {
      // https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/498732
      curr = Math.min(i - hash[s[i]], curr + 1)
    }
    maxLen = Math.max(maxLen, curr)
    hash[s[i]] = i // save the index
  }
  return maxLen
}

export default lengthOfLongestSubstring
