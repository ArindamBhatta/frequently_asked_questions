class PrintAllPrime {
    static checkPrimeNo(n: number): boolean {
        if (n <= 1) return false;
        if (n == 2 || n == 3) return true; 
        
        if (n % 2 == 0 || n % 3 == 0) return false; 
        
        for (let i: number = 5; i * i <= n; i= i + 6) {
            if (n % i == 0 || n % (i + 2) == 0) { // Corrected condition
                return false;
            }
        }
        return true;
    }

    static printAllPrimes(limit: number): void {
        for (let i = 2; i <= limit; i++) {
            if (this.checkPrimeNo(i)) {
                console.log(i);
            }
        }
    }


    static sievePrintPrimes(n: number): void {
        let primes: boolean[] = new Array(n + 1).fill(true); // Assume all numbers are prime
        primes[0] = primes[1] = false; // 0 and 1 are not prime

        for (let i = 2; i * i <= n; i++) {
            if (primes[i]) { // If i is still marked prime
                for (let j = i * i; j <= n; j += i) { // Mark multiples of i as non-prime
                    primes[j] = false;
                }
            }
        }

        // Print all prime numbers
        for (let i = 2; i <= n; i++) {
            if (primes[i]) {
                console.log(i);
            }
        }
    }
}

function main() {
    PrintAllPrime.sievePrintPrimes(50); // Prints all primes up to 50
}
main();
