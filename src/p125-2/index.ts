import { isalnum } from "../helper/isalnum";

export const title = "125. Valid Palindrome";

// 2023-09-27
export default function isPalindrome(s: string): boolean {
  const list = s
    .toLowerCase()
    .split("")
    .filter((c) => isalnum(c));
  const max = Math.floor(list.length / 2);

  for (let i = 0; i <= max; i++) {
    if (list[i] !== list[list.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
