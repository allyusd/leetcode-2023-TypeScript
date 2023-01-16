import { exportWarp, TreeNode } from "../../src/p112";

describe("112. Path Sum", () => {
  test.each([
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22, true],
    [[1, 2, 3], 5, false],
    // Since the tree is empty, there are no root-to-leaf paths.
    [[], 0, false],
  ])("case", (root, targetSum, expected) => {
    // 轉換正確
    expect(root).toStrictEqual(TreeNode.toArray(TreeNode.fromArray(root)));

    const tree = TreeNode.fromArray(root);
    // console.log(tree);
    // console.log(JSON.stringify(tree));
    // console.log(TreeNode.toArray(tree));

    const result = exportWarp(tree, targetSum);
    // const array = TreeNode.toArray(result);
    // console.log(array);
    expect(result).toStrictEqual(expected);
  });
});
