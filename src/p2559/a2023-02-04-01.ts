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
  for (const i of queries) {
    let count = 0;
    for (let j = i[0]; j <= i[1]; j++) {
      if (isVowelWord(words[j])) {
        count++;
      }
    }
    output.push(count);
  }

  return output;
}
