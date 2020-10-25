/**
 * In each sorting, the forward and backward bubbling method can get two maximum values at a time,
 * so that the number of times for sorting is almost reduced by half.
 * @param arr number[]
 * @returns number[]
 */
export const bubbleSort = (arr: number[]): number[] => {
  var low = 0
  var high = arr.length - 1 // init
  var tmp, j
  while (low < high) {
    for (j = low; j < high; ++j) // forward bubbling, find the maximum
      if (arr[j] > arr[j+1]) {
        tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    --high
    for (j = high; j > low; --j) // backward bubbling, find the minimum
      if (arr[j] < arr[j-1]) {
        tmp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tmp
      }
    ++low
  }
  return arr
}

/**
 * Basic for loop, positive i and positive j.
 * Each i loop, stick a maximum to the end of the array.
 * @param arr number[]
 * @returns number[]
 */
export const bubbleSort_01 = (arr: number[]): number[] => {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

/**
 * Basic for loop - reversed i and reversed j.
 * Each i loop, stick a minimum to the start of the array.
 * @param arr number[]
 * @returns number[]
 */
export const bubbleSort_02 = (arr: number[]): number[] => {
  for (let i: number = arr.length - 1; i >= 0; i--) {
    for (let j: number = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
