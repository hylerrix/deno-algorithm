import BruteForce from './solutions/1-brute-force.ts'
import BruteForceFunctional from './solutions/2-brute-force-functional.ts'
import TwoPassHashTable from './solutions/4-two-pass-hash-table.ts'
import OnePassHashTable from './solutions/3-one-pass-hash-table.ts'

// Next challenges:
// 3Sum
// 4Sum
// Two Sum II - Input array is sorted
// Two Sum III - Data structure design
// Subarray Sum Equals K
// Two Sum IV - Input is a BST
// Two Sum Less Than K
// Max Number of K-Sum Pairs
// Count Good Meals

/**
 * Brute force lead the Time Complexity up to O(n^2), Space Complexity is O(1).
 * We need to reduce the Time Complexity through adding an another intermediate variable.
 * Hash Table is the best way to maintain a mapping of each element in the array to its index.
 */

export default {
  BruteForce,
  BruteForceFunctional,
  TwoPassHashTable,
  OnePassHashTable, // winner
}
