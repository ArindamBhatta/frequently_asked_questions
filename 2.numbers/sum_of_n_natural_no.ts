class SumOfNaturalNo {
    static broutForce(n: number):number {
        let sum: number = 0;

        for (let i = 1; i <= n; i++) { 
            sum += i;
        }
        return sum;
    } 

    static formula(n: number): number{
        const sum: number = n*(n-1) / 2;
        return sum;
    }

}



function main() {
    const ans: number = SumOfNaturalNo.formula(9);
    console.log(ans);
    
}
main();

