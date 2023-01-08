import { exportWarp } from "./p1";

export function helloWorld(): string {
  return "Hello World";
}

function main(): void {
  console.log(helloWorld());
  p1();
}

function p1() {
  let nums = [2,7,11,15];
  let target = 9;
  let output = exportWarp(nums, target);
  console.log(output);
}

main();
