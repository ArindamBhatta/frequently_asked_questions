// Q: - we have a sorted array 1 to 10 suffle the array in a way that every element get a position. 
//hashMap alternet Map
function shuffleUsingMap(arr: number[]): number[] {
    const cachingValue: Map<number, boolean> = new Map<number, boolean>(); 
    const suffleArray: number[] = [];

    while (suffleArray.length < arr.length) {
        const randomIndex:number = Math.floor(Math.random() * arr.length);
        const randomValue:number = arr[randomIndex];
        if (!cachingValue.has(randomValue)) {
            cachingValue.set(randomValue, true);
            suffleArray.push(randomValue);
        }
    }
    return suffleArray;
}

const sortedArray = [1,2,3,4,5,6,7,8,9,10];
console.log(shuffleUsingMap(sortedArray));

// 1️⃣ Count the Frequency of Elements
// Objects only support string keys, but Map works with numbers.
// Faster lookups (.get()) compared to object properties.

// 2️⃣ Find the First Non-Repeating Character in a String
