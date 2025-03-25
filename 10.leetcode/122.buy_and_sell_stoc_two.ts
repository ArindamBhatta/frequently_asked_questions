/*
Buy Low and Sell High at Every Increase
We should iterate through prices and add every increase example: -
prices[i] > prices[i - 1] add these value in profit;
*/

function maxProfitMultipleTransition(prices:number[]):number {
    let totalProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i]> prices[i-1]) {
            totalProfit = totalProfit + (prices[i] - prices[i - 1]);
        }
    }
    return totalProfit;
}

console.log(maxProfitMultipleTransition([7,1,5,3,6,4]));
