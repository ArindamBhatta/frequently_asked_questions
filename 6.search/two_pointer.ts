//Check Array is palandrom or not

function checkPalandrom(arr: number[]):boolean {
    let left: number = 0;
    let right: number = arr.length - 1;
    const mid: number = Math.floor((left + right) / 2);

    while (left <= mid) {
        if (arr[left] !== arr[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(checkPalandrom([1, 1, 2, 2, 1, 1]));
 

    

//11211


// Move all Trailing Zeros
function moveZerosTwoPointers(arr:number[]) {
    let left: number = 0;
    //Iterate through right ponters
    for (let right:number = 0; right < arr.length; right++) {
        if (arr[right] != 0) {
            //swap element if right pointer finds a non zero
            let temp: number = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
        }
    }
    console.log(arr);
    
}

// moveZerosTwoPointers([2, 0, 3, 0, 5, 0, 4, 9,]);

