export function exportWarp(grid: string[][]): number {
  return numIslands(grid);
}

// 2023-02-23
// 200. Number of Islands
function numIslands(grid: string[][]): number {
  let islandsCount = 0;
  const markMap: boolean[][] = [];

  const getMark = (x: number, y: number) => {
    if (markMap[y] === undefined) {
      markMap[y] = [];
    }

    return markMap[y][x];
  };

  const mark = (x: number, y: number) => {
    if (markMap[y] === undefined) {
      markMap[y] = [];
    }

    markMap[y][x] = true;
  };

  const vistIsland = (x: number, y: number) => {
    // console.log(`x: ${x}, y: ${y}`);

    mark(x, y);

    if (x + 1 < grid[0].length && grid[y][x + 1] === "1" && getMark(x + 1, y) !== true) {
      vistIsland(x + 1, y);
    }
    if (x - 1 >= 0 && grid[y][x - 1] === "1" && getMark(x - 1, y) !== true) {
      vistIsland(x - 1, y);
    }
    if (y + 1 < grid.length && grid[y + 1][x] === "1" && getMark(x, y + 1) !== true) {
      vistIsland(x, y + 1);
    }
    if (y - 1 >= 0 && grid[y - 1][x] === "1" && getMark(x, y - 1) !== true) {
      vistIsland(x, y - 1);
    }
  };

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "1" && getMark(x, y) !== true) {
        islandsCount++;
        vistIsland(x, y);
      }
    }
  }

  return islandsCount;
}
