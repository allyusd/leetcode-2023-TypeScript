import { API } from "./api";

export function exportWarp(n: number, bad: number): number {
  API.bad = bad;
  return solution(API.isBadVersion)(n);
}

// 2023-01-24
// 278. First Bad Version
const solution = function (isBadVersion: (n: number) => boolean) {
  return function (n: number): number {
    isBadVersion(n);
    return n;
  };
};
