import _ from "lodash";

export const title = "128. Longest Consecutive Sequence";

// 2023-09-28
// Wrong Answer
export default function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const list: number[][] = [];

  nums.forEach((n) => {
    let match = false;
    list.forEach((l) => {
      if (n == l[0] - 1) {
        match = true;
        l.unshift(n);
      }

      if (n == l[l.length - 1] + 1) {
        match = true;
        l.push(n);
      }
    });

    if (match) {
      let front = -1;
      let back = -1;
      for (const i of _.range(list.length)) {
        const l = list[i];
        if (l[0] === n) {
          back = i;
        }
        if (l[l.length - 1] === n) {
          front = i;
        }
      }

      if (front !== -1 && back !== -1) {
        list[back].shift();
        list[front].push(...list[back]);
        list.splice(back, 1);
      }
    } else {
      list.push([n]);
    }
  });

  let max = list[0].length;
  list.forEach((l) => {
    if (l.length > max) {
      max = l.length;
    }
  });

  return max;
}
