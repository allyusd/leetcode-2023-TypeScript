export function exportWarp(n: number): number {
  return fib(n);
}

// 2023-02-06
// 509. Fibonacci Number
function fib(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
