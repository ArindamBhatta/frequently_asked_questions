function fibonacci(n: number): number {
    if (n == 0 || n == 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(terms: number): void {
    let series: number[] = [];
    for (let i = 1; i <= terms; i++) {
        series.push(fibonacci(i));
    }
    console.log(series);
}

 printFibonacciSeries(8);

/* 
                                f(4)                                          ----- 1

                f(3)                               f(2)                        -----2
                                                 
        f(2)          f(1)                 f(1)         f(0)                    ----4  

    f(1)    f(0)                                                                  --8

    gp series => (2^n) time complexity
*/


