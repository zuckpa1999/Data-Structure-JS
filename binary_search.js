// Binary search




let binary_search = (arr, value) => {
    // assume sorted array
    let high = arr.length - 1
    let low = 0
    let mid = 0
    while (low <= high) {
        mid = Math.floor((high + low) / 2)
        if (arr[mid] === value) {
            return arr[mid]
        }
        else if (value > arr[mid]) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }

    }
    return null
}


let array = [3, 5, 1, 2, 3, 5, 6, 3, 6363, 52, 35235, 6, 346, 36, 36, 346, 346, 34, 634, 634, 6, 3113123]
console.log(array)
let sorted = array.sort((a, b) => a - b)
console.log(sorted)
let result = binary_search(array, 3113123)
console.log(result)