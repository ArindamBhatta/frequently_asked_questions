class TrailingZero {
    static getTrailingZero(n: number) {
        let pow: number = 5;
        let result: number = 0;
        for (let i = 0; pow <= n; i++) {
            result = result + ~~(n / pow); //Double bitwise not
            pow = pow * 5;
        }
        console.log(result);
    }
    
    static getTrailingZeroTwo(n: number) {
        let result: number = 0;
        while (n >= 5) {
            n = ~~(n / 5);
            result = result + n;
        }
        console.log(result);
        
    }
}


function main():void {
    TrailingZero.getTrailingZeroTwo(111);
}

main();