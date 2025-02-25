class FindGcd{
    static broutForce(a:number,b:number) {
        let min: number;
        a < b ? min = a : min = b;

        for (let i:number = ~~(min/2); i >= 1; i--){
            if (a%i == 0 && b%i ==0) {
                console.log(i);
            }  
        }
    }

    static euclidGcd(a: number, b: number) {
        while (a!=b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b -a;
            }
        }
        console.log(a);
    }

    static optEuclidGcd(a: number, b: number) {
        while (a!=0 && b!=0) {
            if (a>b) {
                a = a % b;
            } else {
                b = b % a;
            }
        }
        a!=0 ? console.log(a) : console.log(b);
    }
}

// function main() {
//     FindGcd.optEuclidGcd(1113, 1117);
// }
// main();