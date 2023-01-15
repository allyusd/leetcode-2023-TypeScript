export function exportWarp(nums: number[]): number {
  return differenceOfSum(nums);
}

// 2023-01-14
// 2535. Difference Between Element Sum and Digit Sum of an Array
// Constraints:
// 1 <= nums.length <= 2000
// 1 <= nums[i] <= 2000
function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((a, x) => a + x);
  // console.log(elementSum);

  const numberToDigitSum = (num: number): number => {
    let sum = 0;
    const text = num.toString();
    // console.log(text);
    for (let i = 0; i < text.length; i++) {
      const digit = Number(text[i]);
      sum = sum + digit;
    }

    return sum;
  };

  // initialValue 如果沒有提供，第一次會把 index 0 當成 a 開始，所以會跳過一次
  const digitSum = nums.reduce((a, x) => a + numberToDigitSum(x), 0);
  // console.log(digitSum);

  const abs = Math.abs(elementSum - digitSum);

  return abs;
}
