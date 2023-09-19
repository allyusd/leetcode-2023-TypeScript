export function exportWarp(strs: string[]): string[][] {
  return groupAnagrams(strs);
}

// 2023-09-19
// 49. Group Anagrams
// 想到可以用 Hash Table 來加速
function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];

  const map: Map<string, string[]> = new Map<string, string[]>();

  strs.forEach((str: string) => {
    const hash = str.split("").sort().join("");
    if (map.has(hash)) {
      const list = map.get(hash);
      list?.push(str);
    } else {
      map.set(hash, [str]);
    }
  });

  map.forEach((list: string[]) => {
    output.push(list);
  });

  return output;
}
