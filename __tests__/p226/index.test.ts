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
  ])("case", (root, expected) => {
    // console.log(TreeNode.formArray(root));
    const result = TreeNode.toArray(exportWarp(TreeNode.formArray(root)), true);
    // console.log(result);
    expect(result).toStrictEqual(expected);
  });
});
