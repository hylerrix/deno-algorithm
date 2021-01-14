/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Time complexity : O(2n) = O(n). In the worst case each character will be visited twice by i and j.
 * Space complexity : O(min(m, n)). Same as the previous approach. We need O(k) space for the sliding window, where k is the size of the Set. The size of the Set is upper bounded by the size of the string nn and the size of the charset/alphabet m.
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) { return s.length }
  let longStr: string = ''
  let curStr: string = ''
  for (let i = 0; i < s.length - 1; i++) {
    curStr = s[i]
    for (let j = i + 1; j < s.length; j++) {
      if (curStr.indexOf(s[j]) !== -1) {
        break
      }
      curStr += s[j]
    }
    longStr = longStr.length > curStr.length ? longStr : curStr
  }
  return longStr.length
}

export default lengthOfLongestSubstring
