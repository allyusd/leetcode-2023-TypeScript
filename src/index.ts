// import { exportWarp } from "./p1";
// import { exportWarp } from "./p315";
// import { nums1 } from "../__tests__/p315/case1.data";

// import { promises as fs } from "fs";
// import * as path from "path";

export function helloWorld(): string {
  return "Hello World";
}

async function main(): Promise<void> {
  // console.log(helloWorld());
  // p1();
  // const s = "012345";
  // console.log(s.substring(2, s.length));
  // await p315();
  // console.log("done");
}

// function p1() {
//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   const output = exportWarp(nums, target);
//   console.log(output);
// }

// async function p315() {
//   const result = exportWarp(nums1);
//   const output = JSON.stringify(result);
//   await writeFile(output);
// }

// async function writeFile(output: string) {
//   await fs.writeFile(path.join(".", "case1.expected.ts"), output, "utf8");
// }

main();
