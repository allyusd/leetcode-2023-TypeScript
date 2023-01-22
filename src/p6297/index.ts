export function exportWarp(score: number[][], k: number): number[][] {
  return sortTheStudents(score, k);
}

// 2023-01-21
// 6297. Sort the Students by Their Kth Score
function sortTheStudents(score: number[][], k: number): number[][] {
  score.sort((a, b) => {
    if (a[k] > b[k]) return -1;
    if (a[k] < b[k]) return 1;
    return 0;
  });

  return score;
}
