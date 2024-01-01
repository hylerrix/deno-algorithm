/**
 * Jan 01, 2024 (Monday), created by hylerrix
 */
function groupAnagrams(strs: string[]): string[] {
  const map = new Object()
  for (const s of strs) {
    const count = new Array(26).fill(0)
    for (const c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    map[count] ? map[count].push(s) : map[count] = [s]
  }
  return Object.values(map)
}

export default groupAnagrams
