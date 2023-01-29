export function exportWarp(n: number): number {
  return distinctIntegers(n);
}

// 2023-01-28
// 6337. Count Distinct Numbers on Board
function distinctIntegers(n: number): number {
  const board: number[] = [n];
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < n; i++) {
      for (const x of board) {
        if (x % i === 1 && board.includes(i) === false) {
          board.push(i);
          flag = true;
        }
      }
    }
  }

  return board.length;
}
