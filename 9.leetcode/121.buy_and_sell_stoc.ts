function maxProfit(prices:number[]):number {
    let maxProfit: number = 0;
    let bestBuy: number = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > bestBuy) {
            maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
        }
        bestBuy = Math.min(bestBuy, prices[i]);
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
