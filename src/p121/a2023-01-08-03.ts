export function exportWarp(prices: number[]): number {
  return maxProfit(prices);
}

// 2023-01-08
// 121. Best Time to Buy and Sell Stock
// Time Limit Exceeded
function maxProfit(prices: number[]): number {
  let profit = 0;
  let maxIndex = 0;
  let minIndex = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    // 過了第一天，知道最高價格跟今天的差價
    if (maxIndex > i) {
      let diff = prices[maxIndex] - prices[i];
      if (diff > profit) {
        profit = diff;
      }
      continue;
    }
    
    // 最高價跟最低價的差價比目前的小，結束
    if (minIndex < maxIndex) {
      if (prices[maxIndex] - prices[minIndex] < profit) {
        break;
      }
    }

    maxIndex = 0;
    minIndex = Number.MAX_VALUE;
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[maxIndex]) {
        maxIndex = j;
      }

      if (prices[j] < prices[minIndex]) {
        minIndex = j;
      }

      let diff = prices[j] - prices[i];
      if (diff > profit) {
        profit = diff;
      }
    }
  }

  return profit;
}
