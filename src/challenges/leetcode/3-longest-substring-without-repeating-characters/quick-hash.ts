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
  let max_len: number = 0
  let curr: number = 0
  let hash: { [key: string]: number } = {} 
  // consider a string: _ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a
  for (let i = 0; i < s.length; i++) {
    // console.log('---- i', i)
    // console.log('s(i)', s[i])
    // console.log('hash[s[i]]', hash[s[i]])
    if (hash[s[i]] == null) {
      curr += 1
    } else {
      // console.log('i - hash[s[i]]', i - hash[s[i]])
      // current char has pass (i - hash[s[i]]) count since it last showed up
      // curr keeps track of the length of the substring that has not seen an already seen character.
      // https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/498732
      curr = Math.min(i - hash[s[i]], curr + 1)
    }
    max_len = Math.max(max_len, curr)
    // console.log('curr', curr)
    // console.log('max_len', max_len)
    hash[s[i]] = i // save the index
    // console.log('hash', hash)
  }
  return max_len
}

export default lengthOfLongestSubstring
