
// Solution 1:

// function maxNumber(arr) {
//   return Math.max(...arr)
// }

// Ssolution 2:

function maxNumber(arr) {
    let maximum = arr[0];
    for (let i=1; i<arr.length; i++) {
        if(arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}

