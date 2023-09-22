export const title = "36. Valid Sudoku";

// 2023-09-22
// 直覺，分別針對三個規則進行處理
// Accepted
// Runtime 112 ms Beats 8.92%
export default function isValidSudoku(board: string[][]): boolean {
  const isDuplicate = (arr: number[]) => {
    const set = new Set<number>();

    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return true;
      } else {
        set.add(arr[i]);
      }
    }

    return false;
  };

  const toNumber = (arr: string[]) => {
    return arr.map((x) => Number(x)).filter((x) => !Number.isNaN(x));
  };

  // Check Row
  for (let i = 0; i < board.length; i++) {
    if (isDuplicate(toNumber(board[i]))) {
      return false;
    }
  }

  // Check Col
  for (let c = 0; c < board[0].length; c++) {
    const col = [];
    for (let r = 0; r < board.length; r++) {
      col.push(board[r][c]);
    }

    if (isDuplicate(toNumber(col))) {
      return false;
    }
  }

  // Check 3 x 3 sub-boxe
  for (let x = 1; x < board[0].length; x += 3) {
    for (let y = 1; y < board.length; y += 3) {
      const sub = [];
      for (const dx of [-1, 0, 1]) {
        for (const dy of [-1, 0, 1]) {
          sub.push(board[y + dy][x + dx]);
        }
      }
      if (isDuplicate(toNumber(sub))) {
        return false;
      }
    }
  }

  return true;
}
