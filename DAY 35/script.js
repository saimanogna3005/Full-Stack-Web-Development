//question 1
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Element found at arr[${i}].`; 
        }
    }
    return `Element not found in the array.`;
}


const arr = [256, 32, 187, 56, 4, 99];
const target = 99;
const result = linearSearch(arr, target);

console.log(result); 
//question 2

function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return `Element found at arr[${mid}].`;
    } else if (arr[mid] < target) {
        left = mid + 1; 
    } else {
        right = mid - 1; 
    }
}

return `Element not found in the array.`; 
}


const arr1 = [4, 32, 56, 99, 187, 256];
const target1 = 32;
const result1 = binarySearch(arr1, target1);

console.log(result1);