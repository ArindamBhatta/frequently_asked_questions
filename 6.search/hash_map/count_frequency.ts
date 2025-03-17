function countFrequency(arr: number[]) {
    const frequencyMap: Map<number, number> = new Map<number, number>();

    //check max frequency.

    for (let i = 0; i < arr.length; i++) {
        frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) || 0)+ 1);   
    }

    let maxFrequency: number = 0;
    let maxNumber: number = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let frequency:number = frequencyMap.get(arr[i]) ?? 0; //or !
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            maxNumber = arr[i];
        }
    }
    console.log(maxNumber);
    
}
countFrequency([1, 1, 1, 2, 3, 4, 5]);

/* 
const map = new Map();
map.set("apple", 5);
console.log(map.get("apple")); // Output: 5
console.log(map.get("banana")); // Output: undefined (because "banana" is not in the Map)
If the key exists, .get(key) returns its associated value.
If the key does not exist, .get(key) returns undefined.

Dry run
if number find 1st time
frequencyMap.get(arr[i]) → Since the number is not yet in the Map, .get() returns undefined. (undefined || 0) + 1 → 0 + 1 = 1
.set(arr[i], 1) → Stores { arr[i] → 1 } in the Map.

If the number appears again
frequencyMap.get(arr[i]) → Returns the current count.
(currentCount || 0) + 1 → Increases the count.
.set(arr[i], newCount) → Updates the count in the Map.
*/