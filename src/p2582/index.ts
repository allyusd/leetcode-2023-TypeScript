export function exportWarp(n: number, time: number): number {
  return passThePillow(n, time);
}

// 2023-03-04
// 2582. Pass the Pillow
function passThePillow(n: number, time: number): number {
  const m = n - 1;

  const x = Math.floor(time / m);
  const p = time % m;

  if (x % 2 === 0) {
    return 1 + p;
  }

  return n - p;
}
