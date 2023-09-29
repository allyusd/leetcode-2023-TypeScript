// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from "lodash";

// 2023-09-29
export const title = "1299. Replace Elements with Greatest Element on Right Side";

export default function replaceElements(arr: number[]): number[] {
  const output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let max = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    output.push(max);
  }

  output.push(-1);

  return output;
}
