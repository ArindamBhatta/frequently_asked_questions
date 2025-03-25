function sumOfNumber(n:number):number {
    if (n == 1) {
        return n;
    }
    return n + sumOfNumber(n - 1);
}


/* 
Call: sumOfNumber(4)
    sumOfNumber(4) → 4 + sumOfNumber(3)
Call: sumOfNumber(3)
    sumOfNumber(3) → 3 + sumOfNumber(2)
Call: sumOfNumber(2)
    sumOfNumber(2) → 2 + sumOfNumber(1)
Call: sumOfNumber(1) (Base case)
    sumOfNumber(1) → returns 1

Returning:
sumOfNumber(2) = 2 + 1 = 3
sumOfNumber(3) = 3 + 3 = 6
sumOfNumber(4) = 4 + 6 = 10
*/