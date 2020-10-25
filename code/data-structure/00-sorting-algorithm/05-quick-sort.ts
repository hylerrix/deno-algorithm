/**
 * Divide and conquer. select a random pivot,
 * and separate into two parts,
 * all the first parts' number is less than the pivot,
 * all the second parts' number is more than the pivot,
 * and do the same operation for each part recursively.
 * @param arr number[]
 * @returns number[]
 */
export const quickSort = (arr: number[]): number[] => {
　　if (arr.length <= 1) { return arr }
　　var pivotIndex: number = Math.floor(arr.length / 2)
　　var pivot: number = arr.splice(pivotIndex, 1)[0]
　　var left: number[] = []
　　var right: number[] = []
　　for (var i = 0; i < arr.length; i++) {
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i])
　　　　} else {
　　　　　　right.push(arr[i])
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right))
}
