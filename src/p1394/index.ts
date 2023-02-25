export function exportWarp(arr: number[]): number {
  return findLucky(arr);
}

// 2023-02-25
// 1394. Find Lucky Integer in an Array
function findLucky(arr: number[]): number {
  const frequency = new Map<number, number>();

  for (const n of arr) {
    let count = frequency.get(n);
    if (count === undefined) {
      count = 0;
    }

    count++;

    frequency.set(n, count);
  }

  let luckyNumber = -1;
  for (const k of frequency.keys()) {
    if (frequency.get(k) === k) {
      luckyNumber = k;
    }
  }

  return luckyNumber;
}
