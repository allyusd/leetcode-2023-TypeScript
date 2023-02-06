export function exportWarp(coins: number[], amount: number): number {
  return coinChange(coins, amount);
}

// 2023-02-06
// 322. Coin Change
function coinChange(coins: number[], amount: number): number {
  const order = coins.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  });

  let count = 0;
  let target = amount;
  for (let c of order) {
    count += Math.floor(target / c);
    target = target % c;
    // console.log(amount % c);
  }

  if (target !== 0) {
    if (order.length > 1) {
      return coinChange(order.slice(1, order.length), amount);
    } else {
      return -1;
    }
  }

  return count;
};
