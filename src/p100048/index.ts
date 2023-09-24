export const title = "100048. Beautiful Towers II";

// 2023-09-24
// Time Limit Exceeded
export default function maximumSumOfHeights(maxHeights: number[]): number {
  const beautiful = (maxHeights: number[], index: number): number => {
    const output = [...maxHeights];
    for (let i = index - 1; i >= 0; i--) {
      if (output[i] > output[i + 1]) {
        output[i] = output[i + 1];
      }
    }

    for (let i = index + 1; i < maxHeights.length; i++) {
      if (output[i] > output[i - 1]) {
        output[i] = output[i - 1];
      }
    }

    return output.reduce((p, c) => p + c);
  };

  let lmax = 0;
  let rmax = maxHeights.length - 1;
  for (let i = 0; i < maxHeights.length; i++) {
    if (maxHeights[i + 1] < maxHeights[i]) {
      break;
    }

    lmax = i;
  }

  for (let i = maxHeights.length - 1; i >= 0; i--) {
    if (maxHeights[i - 1] < maxHeights[i]) {
      break;
    }

    rmax = i;
  }

  let max = beautiful(maxHeights, 0);

  for (let i = lmax; i <= rmax; i++) {
    const count = beautiful(maxHeights, i);
    if (count > max) {
      max = count;
    }
  }

  return max;
}
