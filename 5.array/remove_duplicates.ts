//Remove Duplicate in Sorted Array
function removeDuplicatesInShortedArray(arr: number[]) {
    if (arr.length === 0) return arr;

    let j: number = 1;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[j] = arr[i];
            j++;
        }
    }
    
    arr[j] = arr[arr.length];

    arr.length = j;

    console.log(arr);
}
// removeDuplicatesInShortedArray([1, 2, 2, 3, 5, 5, 5, 6]);


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

