export function exportWarp(nums: number[]): number {
  return differenceOfSum(nums);
}

// 2023-01-14
// 6291. Difference Between Element Sum and Digit Sum of an Array
// Constraints:
// 1 <= nums.length <= 2000
// 1 <= nums[i] <= 2000
function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((a, x) => a + x);
  // console.log(elementSum);

  const numberToDigitSum = (num: number): number => {
    let sum = 0;
    const text = num.toString();
    for (let i = 0; i < text.length; i++) {
      const digit = Number(text[i]);
      sum = sum + digit;
    }

    return sum;
  };

  const digitSum = nums.reduce((a, x) => a + numberToDigitSum(x));
  // console.log(digitSum);

  const abs = Math.abs(elementSum - digitSum);

  return abs;
}
