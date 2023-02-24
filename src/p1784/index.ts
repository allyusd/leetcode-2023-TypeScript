export function exportWarp(s: string): boolean {
  return checkOnesSegment(s);
}

// 2023-02-24
// 1784. Check if Binary String Has at Most One Segment of Ones
function checkOnesSegment(s: string): boolean {
  let isBreak = false;

  for(let c of s) {
    if (isBreak == false && c === "0") {
      isBreak = true;
    }

    if (isBreak == true && c === "1") {
      return false;
    }
  }

  return true;
}
