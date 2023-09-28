import _ from "lodash";

// 2023-09-28
export const title = "167. Two Sum II - Input Array Is Sorted";

export default function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return [left + 1, right + 1];
}
