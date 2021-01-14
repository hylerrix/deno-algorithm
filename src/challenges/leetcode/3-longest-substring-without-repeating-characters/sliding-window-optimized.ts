/**
 * Thursday Jan 14, 2021, created by hylerrix
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
