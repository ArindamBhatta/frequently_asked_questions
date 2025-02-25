//Q1: -Check 2nd Learges Llement 
function checkSeconLeargest(arr: number[]) {
    let maxOne:number;
    let maxTwo:number;
    if (arr[0] > arr[1]) {
         maxOne = arr[0];
         maxTwo = arr[1];
    } else {
        maxOne = arr[1];
        maxTwo = arr[0]; 
    }
    for (let i = 2; i < arr.length; i = i+1) {
        if (arr[i] > maxOne) {
            maxTwo = maxOne;
            maxOne = arr[i];
        }else if (arr[i] > maxTwo) {
            maxTwo = arr[i];
        }    
    }
    console.log(maxTwo);  
}
//checkSeconLeargest([10, 50, 30, 25]);

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


// Find Missing Number
function findMissingElement(arr:number[]):void {
    let sum = 0;
    let lastNumber = arr[arr.length - 1];    

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    const total = (lastNumber / 2) * (lastNumber + 1);
    
    const missingNo = total - sum;

    console.log(missingNo);
}
// findMissingElement([1, 2, 3, 5]);

//Find Leader
//[10   20  30] only 30 is leder;  [30  20  10] Every value is a leder;
function findLeader(arr:number[]) {
    for (let i:number = 0; i < arr.length; i++) {
      let isLeder:boolean = true;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
          isLeder = false;
          break;
        }
      }
      if (isLeder) {
        console.log(arr[i]);
      }
    }
  }
  
// findLeader([8, 11, 5, 11, 7, 6, 3]);
  
function findLeaderOpt(arr:number[]) {
    let maxVale: number = Number.MIN_SAFE_INTEGER;
    console.log(maxVale);
    
    let lastIndex = arr.length - 1;
    let leaderArray:number[] = [];

    for (let i = lastIndex; i >= 0; i--) {
        if (arr[i] > maxVale) {
            leaderArray.push(arr[i]);
            maxVale = arr[i];
        }
    }
    console.log(leaderArray);
}
  
findLeaderOpt([10, 22, 12, 3, 0, 6]);
  
  


//Subarray
function SubArray(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          for (let k = i; k <= j; k++) {
            console.log(arr[k]);
          } 
          console.log('\n');
        }
    }
  }
// SubArray([1, 2, 3, 4, 5]);

