export function exportWarp(s: string): boolean {
  return isPalindrome(s);
}

// 2023-01-09
// 125. Valid Palindrome
function isPalindrome(s: string): boolean {
  // 透過正則表達式排除掉英數字以外的字元
  const alphanumeric = s.replace(/[^a-zA-Z0-9]/g, "");
  // 轉成小寫
  const lowercase = alphanumeric.toLocaleLowerCase();
  // console.log(lowercase);

  // 比對字串頭尾直到中間為止，如果有不一致就是不符合條件
  const halfLength = Math.floor(lowercase.length / 2);
  for (let i = 0; i < halfLength; i++) {
    if (lowercase[i] !== lowercase[lowercase.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
