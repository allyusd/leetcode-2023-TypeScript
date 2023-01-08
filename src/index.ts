import { exportWarp } from "./p1";

export function helloWorld(): string {
  return "Hello World";
}

function main(): void {
  console.log(helloWorld());
  // p1();
  const s = "012345";
  console.log(s.substring(2, s.length));
}

function p1() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const output = exportWarp(nums, target);
  console.log(output);
}

main();
