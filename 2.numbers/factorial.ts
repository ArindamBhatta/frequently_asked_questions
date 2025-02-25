class FindFactorial {
    static broutForce(n: number):number {

        if (n == 0) {
            return 1;
        }

        let sum: number = 1;

        for (let i = 1; i <= n; i++) { 
            sum *= i;
        }
        return sum;
    } 
}

// function main() {
//     const answer:number = FindFactorial.broutForce(5);
//     console.log(answer);
    
// }
// main();



