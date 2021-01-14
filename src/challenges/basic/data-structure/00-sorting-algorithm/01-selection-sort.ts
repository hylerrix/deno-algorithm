/**
 * Use the index flag to mark the minimum - positive i and positive j.
 * Each i loop, select a minimum to the end of the sorted array
 * sorted array exist at the start.
 * @param arr number[]
 * @returns number[]
 */
export const selectionSort = (arr: number[]): number[] => {
  var len = arr.length
  var minIndex
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { // find the minimum
        minIndex = j // save the minimum's index
      }
    }
    var temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/**
 * Basic for loop - reversed i and positive j.
 * Each i loop, stick a maximum to the start of sorted array,
 * sorted array exist at the end.
 * Notice: this is not bubble sort because it didn't compare adjacent element.
 * Notice: this is not selection sort because it didn't use selection flag.
 * @param arr number[]
 * @returns number[]
 */
export const bubble_selection_like_sort = (arr: number[]): number[] => {
  for (let i: number = arr.length - 1; i >= 0; i--) {
    for (let j: number = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
