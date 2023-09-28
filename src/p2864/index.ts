export const title = "2864. Maximum Odd Binary Number";

// 2023-09-24
export default function maximumOddBinaryNumber(s: string): string {
  const sum = s
    .split("")
    .map((c) => Number(c))
    .reduce((p, c) => p + c);

  let output = "";

  for (let i = 0; i < sum - 1; i++) {
    output += "1";
  }

  for (let i = 0; i < s.length - sum; i++) {
    output += "0";
  }

  output += "1";

  return output;
}
