export const title = "2865. Beautiful Towers I";

// 2023-09-24
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

  let max = 0;

  for (let i = 0; i < maxHeights.length; i++) {
    const count = beautiful(maxHeights, i);
    if (count > max) {
      max = count;
    }
  }

  return max;
}
