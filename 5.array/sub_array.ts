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
SubArray([1, 2, 3, 4, 5]);