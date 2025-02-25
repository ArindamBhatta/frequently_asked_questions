function fibonacci(n: number): number {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(terms: number): void {
    let series: number[] = [];
    for (let i = 1; i <= terms; i++) {
        series.push(fibonacci(i));
    }
    console.log(series.join(", "));
}


