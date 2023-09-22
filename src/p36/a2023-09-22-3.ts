export const title = "36. Valid Sudoku";

// 2023-09-22
// 直接合併處理，這樣符合條件可以直接退出，節省時間
// Accepted
// Runtime 87 ms Beats 19.34%
export default function isValidSudoku(board: string[][]): boolean {
  const initArray = () => {
    return Array(9)
      .fill(null)
      .map(() => new Set<string>());
  };

  const row: Set<string>[] = initArray();
  const col: Set<string>[] = initArray();
  const box: Set<string>[] = initArray();

  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      const item = board[y][x];

      if (item === ".") {
        continue;
      }

      if (row[y].has(item)) {
        return false;
      } else {
        row[y].add(item);
      }

      if (col[x].has(item)) {
        return false;
      } else {
        col[x].add(item);
      }

      const by = Math.floor(x / 3) + Math.floor(y / 3) * 3;

      if (box[by].has(item)) {
        return false;
      } else {
        box[by].add(item);
      }
    }
  }

  return true;
}
