export function exportWarp(prices: number[]): number {
  return maxProfit(prices);
}

// 2023-01-09
// 121. Best Time to Buy and Sell Stock
// 透過 ChatGPT 提供的想法，把過去最低價格記下，就不需要第二個迴圈
function maxProfit(prices: number[]): number {
  let profit = 0;

  // 過去的最低價格
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let diff = prices[i] - minPrice;

    if (diff > profit) {
      profit = diff;
    }
  }

  return profit;
}
