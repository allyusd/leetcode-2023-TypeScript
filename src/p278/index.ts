import { API } from "./api";

export function exportWarp(n: number, bad: number): number {
  API.bad = bad;
  return solution(API.isBadVersion)(n);
}

// 2023-01-24
// 278. First Bad Version
// 直覺是 binary search
const solution = function (isBadVersion: (n: number) => boolean) {
  return function (n: number): number {
    isBadVersion(n);

    let left = 1;
    let right = n;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const mid = Math.floor((left + right) / 2);
      // console.log(`mid, ${mid}`);
      if (isBadVersion(mid - 1) === false && isBadVersion(mid)) {
        return mid;
      }

      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  };
};
