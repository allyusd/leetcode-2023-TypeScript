import _ from "lodash";

// 2023-09-29
export const title = "1299. Replace Elements with Greatest Element on Right Side";

export default function replaceElements(arr: number[]): number[] {
  const output = [];
  for (const i of _.range(arr.length - 1)) {
    let max = arr[i + 1];
    for (const j of _.range(i + 1, arr.length)) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    output.push(max);
  }

  output.push(-1);

  return output;
}
