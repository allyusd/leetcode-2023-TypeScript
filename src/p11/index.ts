import _ from "lodash";

export const title = "11. Container With Most Water";

// 2023-10-02
export default function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = left;
  let rightMax = right;
  while (left < right) {
    if (height[left] > height[leftMax]) {
      leftMax = left;
    }

    if (height[right] > height[rightMax]) {
      rightMax = right;
    }

    const water = Math.min(height[leftMax], height[rightMax]) * (right - left);
    if (water > max) {
      max = water;
    }

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}
