export function exportWarp(n: number, queries: number[][]): number[][] {
  return rangeAddQueries(n, queries);
}

function initialMatrix (size: number): number[][] {
  const matrix: number[][] = [];

  for (let y = 0; y < size; y++) {
    matrix[y] = [];
    for (let x = 0; x < size; x++) {
      matrix[y][x] = 0;
    }
  }

  return matrix;
};

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
    for (let y = q[1]; y <= q[3]; y++) {
      for (let x = q[0]; x <= q[2]; x++) {
        matrix[y][x]++;
      }
    }
  });

  return matrix;
}
