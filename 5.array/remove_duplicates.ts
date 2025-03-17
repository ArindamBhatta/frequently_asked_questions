//Remove Duplicate in Sorted Array

function removeDuplicate(arr:number[]) {
    let i: number = 1;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[j-1]) {
          arr[i] = arr[j];
          i++;
      }
    }
    arr.length = i;
    console.log(arr);   
}
//removeDuplicate([1, 2, 2, 2, 3, 4, 5, 5, 5, 6]);

/* 
arr[j] !== arr[j-1]
✅ 2 !== 1 => arr[1] = 2;
❌ 2 === 2 => No change.
❌ 2 === 2 => No change.
✅ 3 !== 2 => arr[2] = 3;
✅ 4 !== 3 => arr[3] = 4;
✅ 5 !== 4 => arr[4] = 5;
❌ 5 === 5 => No Change;
❌ 5 === 5 => No Change;
✅ 6 !== 5 => arr[5] = 6;
[1,2,3,4,5,6]
*/

function RemoveTriplicate(arr: number[]) {
    let i: number = 1;
    let count: number = 1;

    for (let j = 1; j < arr.length; j++){
        if (arr[j] === arr[j-1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            arr[i] = arr[j];
            i++;
        }
    }
    arr.length = i;
    console.log(arr);   
}

RemoveTriplicate([1, 2, 2, 2, 3, 4, 5, 5, 5, 6]);


function removeDuplicatesInUnshortedArray(arr:number[]) {
    if (arr.length === 0) return arr;
    let uniqueElement: number[] = [];

    for (let i: number = 0; i < arr.length; i++) {
        
        let isDuplicate: boolean = false;

            for (let j:number = 0; j < uniqueElement.length; j++) {
                if (arr[i] == uniqueElement[j]) {
                    isDuplicate = true;
                    break;
                }  
            }
        
        if (!isDuplicate) {
            uniqueElement.push(arr[i]);
        }
    }
    console.log(uniqueElement);  
}
// removeDuplicatesInUnshortedArray([1, 2, 3, 4, 4, 3, 2, 1]);

