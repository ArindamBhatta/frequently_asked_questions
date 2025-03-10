//recursive function
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: single-element array is already sorted
    }

    // Step 1: Split the array into two halves
    const mid:number = Math.floor(arr.length / 2);
    const left:number[] = mergeSort(arr.slice(0, mid));
    const right: number[] = mergeSort(arr.slice(mid, arr.length));
   
    // Step 2: Merge sorted halves using two-pointer technique
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let i = 0, j = 0;
    let sortedArr: number[] = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }

    // Append any remaining elements from left and right
    while (i < left.length) sortedArr.push(left[i++]);
    while (j < right.length) sortedArr.push(right[j++]);

    return sortedArr;
}

// Example usage
const arr = [10, 7, 9, 8, 3, 2, 1, 6, 5, 4];
console.log(mergeSort(arr));
//O(n log n);