export function exportWarp(gifts: number[], k: number): number {
  return pickGifts(gifts, k);
}

// 2023-02-04
// 6348. Take Gifts From the Richest Pile
function pickGifts(gifts: number[], k: number): number {
  for (let i = 0; i < k; i++) {
    const max = Math.max(...gifts);

    if (max === 1) {
      break;
    }

    // console.log(`max: ${max}`);
    const maxIndex = gifts.indexOf(max);
    const sqrt = Math.floor(Math.sqrt(gifts[maxIndex]));
    // console.log(`sqrt: ${sqrt}`);
    gifts[maxIndex] = sqrt;
  }

  // console.log(`gifts: ${gifts}`);
  const sum = gifts.reduce((a, b) => a + b, 0);

  return sum;
}
