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
  for (let c of order) {
    count += Math.floor(amount / c);
    amount = amount % c;
    console.log(amount % c);
  }

  if (amount !== 0) {
    return -1;
  }

  return count;
};
