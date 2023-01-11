import { exportWarp, TreeNode } from "../../src/p226";

describe("226. Invert Binary Tree", () => {
  test.each([
    [
      [4, 2, 7, 1, 3, 6, 9],
      [4, 7, 2, 9, 6, 3, 1],
    ],
    [
      [2, 1, 3],
      [2, 3, 1],
    ],
    [[], []],
    [
      [4, 2, 7, null, 3, 6, 9],
      [4, 7, 2, 9, 6, 3],
    ],
    [
      [4, 2, 7, 1, null, 6, 9],
      [4, 7, 2, 9, 6, null, 1],
    ],
  ])("case", (root: (number | null)[], expected) => {
    // console.log(TreeNode.formArray(root));
    const result = TreeNode.toArray(exportWarp(TreeNode.formArray(root)), true);
    // console.log(result);
    expect(result).toStrictEqual(expected);
  });
});
