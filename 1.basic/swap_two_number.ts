class SwapTwoNumber {
  static  swapWithExtraVar(a:number, b:number) {
    let  temp:number;
    temp = a;
    a = b;
    b = temp;
    console.log('a is $a and b is $b');
  }

  static  SwapWithOutAnyVar( a:number, b:number) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('a is $a and b is $b');
  }
}

function main():void {
  SwapTwoNumber.swapWithExtraVar(5, 4);
  SwapTwoNumber.SwapWithOutAnyVar(5, 4);
}
main()
