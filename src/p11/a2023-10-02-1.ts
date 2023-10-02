import _ from "lodash";

export const title = "11. Container With Most Water";

// 2023-10-02
// Time Limit Exceeded
export default function maxArea(height: number[]): number {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const water = Math.min(height[i], height[j]) * (j - i);
      if (water > max) {
        max = water;
      }
    }
  }

  return max;
}
