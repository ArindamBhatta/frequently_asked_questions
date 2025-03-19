function getPowerOfNumber(num: number, pow: number):number {
    if (pow == 1) {
        return num;
    }
    if (pow == 0) {
        return 1;
    }

    let answr: number = num;

    for (let i = 2; i <= pow; i++) {
        answr = num * answr;
    }
    return answr;
}

// console.log(getPowerOfNumber(3, 5)); //Time complexcity O(n); 

//binary exponacation
function powerFast(base: number, exp: number): number {
    if (exp == 0) return 1;  // Anything to the power 0 is 1
    if (base == 0) return exp < 0 ? Infinity : 0; // Handle 0^negative cases
    if (base == 1) return 1;  // 1^any = 1
    if (base == -1) return exp % 2 == 0 ? 1 : -1; // Handle -1 cases

    let isNegativeExp = exp < 0; 

    if (isNegativeExp) {
        exp = -exp;
    }

    let answer: number = 1;

    while (exp > 0) {
        if (exp % 2 === 1) {
            answer *= base; 
        }
        base *= base; // Square the base
        exp = Math.floor(exp / 2); // Integer division
    }

    return isNegativeExp ? 1 / answer : answer;
}

// Test cases
console.log("Final Result:", powerFast(-3, 5)); // Expected: -243
console.log("Final Result:", powerFast(2, -3)); // Expected: 0.125 (1/8)
console.log("Final Result:", powerFast(0, 5)); // Expected: 0
console.log("Final Result:", powerFast(0, -5)); // Expected: Infinity
console.log("Final Result:", powerFast(1, 10000)); // Expected: 1
console.log("Final Result:", powerFast(-1, 10001)); // Expected: -1
console.log("Final Result:", powerFast(-1, 10000)); // Expected: 1



