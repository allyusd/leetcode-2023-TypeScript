export function exportWarp(strs: string[]): string[][] {
  return groupAnagrams(strs);
}

// 2023-09-19
// 49. Group Anagrams
// Time Limit Exceeded
function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];

  const isAnagrams = (s: string, t: string) => {
    return s.split("").sort().join("") === t.split("").sort().join("");
  };

  strs.forEach((str: string) => {
    let newCase = true;
    for (let i = 0; i < output.length; i++) {
      if (isAnagrams(str, output[i][0])) {
        output[i].push(str);
        newCase = false;
        break;
      }
    }

    if (newCase) {
      output.push([str]);
    }
  });

  return output;
}
