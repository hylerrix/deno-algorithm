/**
 * Jan 01, 2024 (Monday), created by hylerrix
 */
const { groupBy } = _

function groupAnagrams(strs: string[]): string[] {
  return Object.values(groupBy(strs, (str) => Array.from(str).sort().join('')));
}

export default groupAnagrams
