export const title = "36. Valid Sudoku";

// 2023-09-22
// 不要預建 Set，節省時間
// Accepted
// Runtime Runtime 68 ms Beats 72.22%
export default function isValidSudoku(board: string[][]): boolean {
  const row: Set<string>[] = [];
  const col: Set<string>[] = [];
  const box: Set<string>[] = [];

  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      const item = board[y][x];

      if (item === ".") {
        continue;
      }

      if (!row[y]) {
        row[y] = new Set<string>();
      }

      if (row[y].has(item)) {
        return false;
      } else {
        row[y].add(item);
      }

      if (!col[x]) {
        col[x] = new Set<string>();
      }

      if (col[x].has(item)) {
        return false;
      } else {
        col[x].add(item);
      }

      const by = Math.floor(x / 3) + Math.floor(y / 3) * 3;

      if (!box[by]) {
        box[by] = new Set<string>();
      }

      if (box[by].has(item)) {
        return false;
      } else {
        box[by].add(item);
      }
    }
  }

  return true;
}
