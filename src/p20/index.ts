export function exportWarp(s: string): boolean {
  return isValid(s);
}

// 開始符號列表
const openList = ["(", "{", "["];

// 結束符號列表，沒用到
// const closeList = [")", "}", "]",];

// 開始結束符號對應表
const openCloseMap = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);

// 2023-01-08 看到別人心得中，題目分類其中一個是 Stack / Queue，就改用 Stack 解題
// 20. Valid Parentheses
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (openList.includes(current)) {
      stack.push(current);
    } else {
      const last = stack.pop();
      // 遇到結束符號，之前卻沒有開始符號，錯誤
      if (last === undefined) {
        return false;
      }
      // 前一個開始符號沒有對應，錯誤
      if (openCloseMap.get(last) !== current) {
        return false;
      }
    }
  }

  // 如果跑完 stack 裡面卻還有開始符號，錯誤
  if (stack.length !== 0) {
    return false;
  }

  return true;
}
