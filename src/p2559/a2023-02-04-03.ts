export function exportWarp(words: string[], queries: number[][]): number[] {
  return vowelStrings(words, queries);
}

function isVowelWord(str: string): boolean {
  const vowel = ["a", "e", "i", "o", "u"];

  return vowel.includes(str[0]) && vowel.includes(str[str.length - 1]);
}

// 2023-02-04
// 6347. Count Vowel Strings in Ranges
// Time Limit Exceeded
function vowelStrings(words: string[], queries: number[][]): number[] {
  const output: number[] = [];

  const tmp: number[] = [];

  const map = new Map<number[], number>();

  for (const w of words) {
    tmp.push(isVowelWord(w) ? 1 : 0);
  }

  for (const i of queries) {
    let count = map.get(i);
    if (count === undefined) {
      count = tmp.slice(i[0], i[1] + 1).reduce((a, b) => a + b, 0);
      map.set(i, count);
    }

    output.push(count);
  }

  return output;
}
