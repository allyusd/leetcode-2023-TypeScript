export function exportWarp(s: string, t: string): boolean {
  return isAnagram(s, t);
}

// 2023-01-18
// 242. Valid Anagram
function isAnagram(s: string, t: string): boolean {
  // 長度不同就不可能
  if (s.length !== t.length) {
    return false;
  }

  for (const c of s) {
    const index = t.indexOf(c);
    if (index === -1) {
      return false;
    }

    t = t.substring(0, index) + t.substring(index + 1);
  }

  return true;
}
