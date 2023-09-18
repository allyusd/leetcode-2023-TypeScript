export function exportWarp(s: string, t: string): boolean {
  return isAnagram(s, t);
}

// 2023-09-18
// 242. Valid Anagram
function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
