import _ from "lodash";

// 2023-09-28
// Time Limit Exceeded
export const title = "167. Two Sum II - Input Array Is Sorted";

export default function twoSum(numbers: number[], target: number): number[] {
  for (const i of _.range(numbers.length)) {
    for (const j of _.range(numbers.length)) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }

  return [];
}
