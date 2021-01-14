/**
 * Thursday Jan 14, 2021, created by hylerrix
 * Runtime: 312 ms, faster than 30.90% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 45.2 MB, less than 48.36% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) { return s.length }
  // two string, one track longest sub string, one track sub string each loop
  let longStr: string = ''
  let curStr: string = ''
  for (let i = 0; i < s.length - 1; i++) {
    curStr = s[i]
    for (let j = i + 1; j < s.length; j++) {
      // indexOf increases the time complexity by n times
      if (curStr.indexOf(s[j]) !== -1) {
        break
      }
      curStr += s[j]
    }
    // update the longest string
    longStr = longStr.length > curStr.length ? longStr : curStr
  }
  return longStr.length
}

export default lengthOfLongestSubstring
