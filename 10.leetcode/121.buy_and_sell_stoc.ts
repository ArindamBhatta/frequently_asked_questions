/*
Every day is Selling Day.
if in case if Selling price is more then Buying price we can get the profit
find the minimum so get the buying price.
*/


function maxProfit(prices: number[]):number {
    let profit:number = 0;
    let buyingPrice:number = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            profit = Math.max(profit, (prices[i] - buyingPrice) )
        }
        buyingPrice = Math.min(prices[i], buyingPrice);
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
