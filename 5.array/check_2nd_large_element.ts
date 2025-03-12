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