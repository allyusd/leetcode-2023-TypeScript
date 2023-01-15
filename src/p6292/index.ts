export function exportWarp(n: number, queries: number[][]): number[][] {
  return rangeAddQueries(n, queries);
}

function initialMatrix(size: number): number[][] {
  const matrix: number[][] = [];

  for (let y = 0; y < size; y++) {
    matrix[y] = [];
    for (let x = 0; x < size; x++) {
      matrix[y][x] = 0;
    }
  }

  return matrix;
}

// 2023-01-14
// 6292. Increment Submatrices by One
// Constraints:
// 1 <= n <= 500
// 1 <= queries.length <= 104
// 0 <= row1i <= row2i < n
// 0 <= col1i <= col2i < n
function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const matrix: number[][] = initialMatrix(n);

  queries.forEach((q: number[]) => {
    let row1 = q[0];
    let row2 = q[2];
    let col1 = q[1];
    let col2 = q[3];

    // 先把 x, y 依照大小排好
    if (row1 > row2) {
      const temp = row1;
      row1 = row2;
      row2 = temp;
    }

    if (col1 > col2) {
      const temp = col1;
      col1 = col2;
      col2 = temp;
    }

    for (let y = col1; y <= col2; y++) {
      for (let x = row1; x <= row2; x++) {
        matrix[y][x]++;
      }
    }
  });

  return matrix;
}
