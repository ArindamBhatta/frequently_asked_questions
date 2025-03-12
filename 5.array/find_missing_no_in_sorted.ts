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