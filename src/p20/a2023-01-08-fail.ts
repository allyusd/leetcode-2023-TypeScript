export function exportWarp(s: string): boolean {
  return isValid(s);
}

// 開始符號列表
const openList = ["(", "{", "["];

// 結束符號列表，
const closeList = [")", "}", "]",];

// 開始結束符號對應表
const openCloseMap = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);

// 2023-01-08 先用一般的想法(先硬幹)，可以過題目提供的測試，自己給的測資過不了，卡關
// 20. Valid Parentheses
function isValid(s: string): boolean {
  // let output = false;

  // 字元不足 2 個，錯誤
  if (s.length < 2) {
    return false;
  }

  let open = s[0];

  // 如果一開始就不是開始符號，錯誤
  // if (open !== "(" && open !==  "{" && open !==  "[") {
  //   return false;
  // }

  if (openList.includes(open) === false) {
    return false;
  }

  let next = s[1];

  // 如果下一個是對應的結束符號，那驗證剩下的
  if (next === openCloseMap.get(open)) {
    // 如果只有二個字元，那符合條件
    if (s.length === 2) {
      return true;
    }

    return isValid(s.substring(2, s.length));
  } else {
    // 如果下一個是其它的結束符號，錯誤
    if (closeList.includes(next)) {
      return false;
    } else {
      // 是另一個開始符號的情況
    }
  }

  return false;
};
