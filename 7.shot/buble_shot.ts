//merge two array in sroted order


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

function twoPointerApproach(arrOne:number[], arrTwo:number[]) {
    let mergeArr: number[] = [];
    let i = 0; let j = 0;
    
    //compare element and push the smaller one
    while (i < arrOne.length && j < arrTwo.length) {
        if (arrOne[i] < arrTwo[j]) {
            mergeArr.push(arrOne[i]);
            i++;
        } else {
            mergeArr.push(arrTwo[j]);
            j++;
        }
    }
    console.log(mergeArr);

    //accumulate the remaining staff
}

twoPointerApproach([1, 3, 5, 7], [2, 4, 6, 8]);

