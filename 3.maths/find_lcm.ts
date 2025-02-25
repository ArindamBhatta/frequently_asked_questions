class FindLcm {
    static bruteForce(a: number, b: number) {
        let max: number = a > b ? a : b; // Start from the greater number
        let multiple: number = max;
        while (true) { 
            if (multiple % a === 0 && multiple % b === 0) { // Check divisibility
                console.log(multiple);
                break; 
            }
            multiple += max;
        }
    }

    static optEuclidGcd(a: number, b: number):number {
        while (a!=0 && b!=0) {
            if (a>b) {
                a = a % b;
            } else {
                b = b % a;
            }
        }
        if (a!=0) {
            return a;
        } else {
            return b;
        }
    }

    static findLcm(a:number, b:number):number {
        return (a * b) / this.optEuclidGcd(a,b)
    }
}

function main() {
    console.log(FindLcm.findLcm(24, 36));
}
main();
