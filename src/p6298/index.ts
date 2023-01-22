export function exportWarp(s: string, target: string): boolean {
  return makeStringsEqual(s, target);
}

// 2023-01-21
// 6298. Apply Bitwise Operations to Make Strings Equal
function makeStringsEqual(s: string, target: string): boolean {
  return target.includes("1");
}

// 0 OR 0 = 0
// 1 OR 0 = 1
// 0 OR 1 = 1
// 1 OR 1 = 1

// 0 XOR 0 = 0
// 1 XOR 0 = 1
// 0 XOR 1 = 1
// 1 XOR 1 = 0

// 如果有 1 的話，可以把另一個數字改成另一個數字
// 如果是 0 的話，自己改變，對方不變
// 所以都是改一個數字嗎？
