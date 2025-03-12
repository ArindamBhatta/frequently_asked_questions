function mergeSort(arr: number[]): number[] {
    //Base case
    if (arr.length <= 1) {
        return arr;
    }
    
    let mid:number = Math.floor(arr.length / 2);
    let leftArray: number[] = mergeSort(arr.slice(0, mid));
    let rightArray: number[] = mergeSort(arr.slice(mid, arr.length));

    return mergeUsingTwoPointer(leftArray, rightArray);
}

function mergeUsingTwoPointer(leftArray:number[], rightArray:number[]):number[] {
    let firstArrayIndex: number = 0;
    let secondArrayIndex: number = 0;
    let sortedArray:number[] = [];

    while (firstArrayIndex < leftArray.length && secondArrayIndex < rightArray.length) {
        if (leftArray[firstArrayIndex] < rightArray[secondArrayIndex]) {
            sortedArray.push(leftArray[firstArrayIndex]);
            firstArrayIndex++;
        } else {
            sortedArray.push(rightArray[secondArrayIndex]);
            secondArrayIndex++;
        }
    }

    //add Remaining valus in array
    while (firstArrayIndex < leftArray.length) {
        sortedArray.push(leftArray[firstArrayIndex]);
        firstArrayIndex++;
    }

    while (secondArrayIndex < rightArray.length) {
        sortedArray.push(rightArray[secondArrayIndex]); 
        secondArrayIndex++;
    }

    return sortedArray;
}

const arr = [10, 7, 9, 8, 3, 2, 1, 6, 5, 4];
console.log(mergeSort(arr));