class FibonacciSeries {
    static serease(n: number) {
        let sum: number = 0;
        let prev: number = 0;
        let next: number = 1;

        while (prev <= n) {
            console.log(prev);
            sum = prev + next;
            prev = next;
            next = sum;   
        }
    }
}

// function main() {
//     FibonacciSeries.serease(8);
// }
// main();