/**
 * Jan 14, 2021 (Thursday), created by hylerrix
 * Time Limit Exceeded
 * Time complexity : O(n^3)
 * Space complexity : O(min(n, m)). We need O(k) space for checking a substring has no duplicate characters, where k is the size of the Set. The size of the Set is upper bounded by the size of the string nn and the size of the charset/alphabet m.
 */
function lengthOfLongestSubstring(s: string): number {
  const n: number = s.length
  let ans = 0
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j <= n; j++) 
      if (allUnique(s, i, j)) ans = Math.max(ans, j - i)
  return ans
}

function allUnique(s: string, start: number, end: number): boolean {
  const set = new Set()
  for (let i = start; i < end; i++) {
    const ch: string = s.charAt(i)
    if (set.has(ch)) return false
    set.add(ch)
  }
  return true
}

export default lengthOfLongestSubstring
