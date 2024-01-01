/**
 * Jan 01, 2024 (Monday), created by hylerrix
 * 执行用时：116 ms，打败 55.56%
 * 内存消耗：62.04 MB，打败 5.09%
 */
function groupAnagrams(strs: string[]): string[] {
  const map = new Map()
  for (const str of strs) {
    const array = Array.from(str)
    array.sort()
    const key = array.toString()
    const list = map.get(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}

export default groupAnagrams
