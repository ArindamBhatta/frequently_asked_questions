function quickSort(arr: number[], start: number, end: number): void {
    if (start < end) {
        let pivotIndex: number = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
}

function swap(arr: number[], i: number, j: number): void {
    let temp: number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr: number[], start: number, end: number): number {
    const pivot = arr[end];
    let index = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {  // Fix: Ensure sorting in ascending order
            index++;
            swap(arr, index, j);
        }
    }
    index++;
    swap(arr, index, end);
    return index;
}

// Example usage
const arr = [8, 4, 7, 3, 1, 9, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 3, 4, 5, 7, 8, 9]
