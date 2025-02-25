function printNo(n:number) {
    console.log(n);
    
    if (n == 1) {
        console.log(n);
        return;
    }

    printNo(n - 1); // pauses execution at this point and starts the recursive call.
    console.log(n); //After returning from recursion, print n again.
}

/* 
Step-by-Step Execution:

    => Call: printNo(4)
        1.Current No is: 4
        2.Calls printNo(3)

    => Call: printNo(3)
        1.Current No is: 3
        2.Calls printNo(2)

    => Call: printNo(2)
        1.Current No is: 2
        2.Calls printNo(1)

    => Call: printNo(1) (Base Case)
        1. Prints: 1
        2.Since n == 1, it prints 1 again and returns.

//Backtracking
    => Returning from printNo(1) to printNo(2)
        Prints: 2 (after recursive call)
        Returns to printNo(3)

    => Returning from printNo(2) to printNo(3)

        Prints: 3
        Returns to printNo(4)

    => Returning from printNo(3) to printNo(4)
        Prints: 4
        Ends execution.
*/




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





