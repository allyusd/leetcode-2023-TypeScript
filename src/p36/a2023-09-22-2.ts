export const title = "36. Valid Sudoku";

// 2023-09-22
// 想說跑一次用公式解，結果居然變慢了
// Accepted
// Runtime 119 ms Beats 8.5%
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

  const initArray = () => {
    return Array(9)
      .fill(null)
      .map(() => Array(9));
  };

  const row: string[][] = initArray();
  const col: string[][] = initArray();
  const box: string[][] = initArray();

  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      const item = board[y][x];
      row[y][x] = item;
      col[x][y] = item;
      const by = Math.floor(x / 3) + Math.floor(y / 3) * 3;
      const bx = ((x % 3) + (y % 3) * 3) % 9;
      box[by][bx] = item;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (isDuplicate(toNumber(row[i]))) {
      return false;
    }
    if (isDuplicate(toNumber(col[i]))) {
      return false;
    }
    if (isDuplicate(toNumber(box[i]))) {
      return false;
    }
  }

  return true;
}
