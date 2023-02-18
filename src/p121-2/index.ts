export function exportWarp(prices: number[]): number {
  return maxProfit(prices);
}

// 2023-02-18
// 121. Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}
