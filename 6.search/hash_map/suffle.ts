function getSuffeleData(arr: number[]): number[] {
    //1.Create a Map for checking if random value is generated 2nd time. 
    let cachingValue: Map<number, boolean> = new Map<number, boolean>();
    //2. Create a array for store the suffeled elements.
    let suffelArray: number[] = [];
    //3. generate random value as long as suffelArray length == arr.length
    while (suffelArray.length < arr.length) {
        let randomIndex:number = Math.floor(Math.random()) * arr.length;
        let randomValue: number = arr[randomIndex];

        if (!cachingValue.has(randomValue)) {
            cachingValue.set(randomValue, true);
            suffelArray.push(randomValue);
        }
    }
    return suffelArray; 
}
