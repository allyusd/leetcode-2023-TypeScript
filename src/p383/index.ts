import { StringHelper } from "./stringHelper";

export function exportWarp(ransomNote: string, magazine: string): boolean {
  return canConstruct(ransomNote, magazine);
}

// 2023-01-28
// 383. Ransom Note
function canConstruct(ransomNote: string, magazine: string): boolean {
  while (ransomNote.length > 0) {
    if (magazine.length === 0) {
      return false;
    }

    const index = magazine.indexOf(ransomNote[0]);
    if (index === -1) {
      return false;
    }

    ransomNote = ransomNote.slice(1, ransomNote.length);
    magazine = StringHelper.removeCharByIndex(magazine, index);
  }

  return true;
}
