// 1st merge two array in a single array then use bubble sort
function getMrgeShotArr(arrOne: number[], arrTwo: number[]) {
    let mergeShotArr:number[] = [];
    for (let i = 0; i< arrOne.length; i++) {      
        mergeShotArr.push(arrOne[i]);
    }
    for (let j = 0; j < arrTwo.length; j++) {
        mergeShotArr.push(arrTwo[j]);        
    }

    for (let i = 0; i < (mergeShotArr.length)-1; i++) {
        for (let j = i; j < mergeShotArr.length; j++) {
            if (mergeShotArr[i] > mergeShotArr[j]) {
                let temp = mergeShotArr[i];
                mergeShotArr[i] = mergeShotArr[j];
                mergeShotArr[j] = temp;
            }
            
        }
    }
    console.log(mergeShotArr);    
}
//approach 2: - using two pointer to merge two array in a single array 
function mergeTwoArray(arrOne: number[], arrTwo: number[]) {
    let i = 0; let j = 0;
    let mergeArray: number[] = [];

    //one time one value is push to mergeArray and increase j or i.
    while ( i < arrOne.length && j< arrTwo.length) {
        if (arrOne[i] < arrTwo[j]) {
            mergeArray.push(arrOne[i])  
            i = i + 1;   
        } else {
            mergeArray.push(arrTwo[j]);
            j = j + 1;
        }
    }

    //add the remaining element
    while (i < arrOne.length) {
        mergeArray.push(arrOne[i]);
        i = i + 1;
    }
   
    while (j < arrTwo.length) {
        mergeArray.push(arrTwo[j]);
        j = j + 1;
    }

    console.log(mergeArray);    
}
mergeTwoArray([1, 3, 5, 7], [2, 4, 6, 8]);
//O(n + m) where n and m are the sizes of arr1 and arr2.

// but this approach i not okay becaused The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

//step 1: - using merge shot


