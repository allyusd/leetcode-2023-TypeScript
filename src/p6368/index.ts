export function exportWarp(word: string, m: number): number[] {
  return divisibilityArray(word, m);
}

// 2023-02-25
// 6368. Find the Divisibility Array of a String
function divisibilityArray(word: string, m: number): number[] {
  const output: number[] = [];

  for (let i = 0; i < word.length; i++) {
    const num = Number(word.slice(0, i + 1));
    const divisibility = num % m === 0 ? 1 : 0;
    output.push(divisibility);
  }

  return output;
}
