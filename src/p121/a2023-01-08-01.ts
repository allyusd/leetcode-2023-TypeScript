export function exportWarp(prices: number[]): number {
  return maxProfit(prices);
}

// 2023-01-08
// 121. Best Time to Buy and Sell Stock
// Time Limit Exceeded
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const diff = prices[j] - prices[i];
      if (diff > profit) {
        profit = diff;
      }
    }
  }

  return profit;
}
