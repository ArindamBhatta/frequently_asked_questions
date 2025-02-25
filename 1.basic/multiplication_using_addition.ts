class MultiplicationUsingAddition {
  static getMultiplicationValue(a:number, b:number) {
    let answer: number = 0;
    
    if (a == 0 || b == 0 ) {
      console.log('Answer is Zero');
      return;
    }

    if (a > b && a > 0 && b > 0) {
      a = a + b;
      b = a - b;
      a = a - b;
    }

    if (a > 0) {
      for (let i = 0; i < a; i++) {
        answer += b;
      }
      console.log(answer);
    }
    if (a < 0) {
      for (let i = a; i < 0 ; i--) {
        answer -= b;          
      }
      console.log(answer);
    }
  }
}






/* 
Steps 1: - Check a || b any value is 0 then print Answer is Zero.

Step 2: - take the lowest nuber for iterable.

Step 3: - if a is positive then using for loop last index a;

Step 4: - if it's a nagative number then using first index is a to less then 0

*/