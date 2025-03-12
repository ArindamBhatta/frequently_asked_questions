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
  
// findLeaderOpt([10, 22, 12, 3, 0, 6]);