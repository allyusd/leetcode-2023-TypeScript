export function exportWarp(n: number): number {
  return alternateDigitSum(n);
}

// 2023-01-21
// 6296. Alternating Digit Sum
function alternateDigitSum(n: number): number {
  const str = n.toString();
  // console.log(str);

  let sign = 1;

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const digit = Number(str[i]);
    sum += digit * sign;
    sign *= -1;
  }

  return sum;
}
