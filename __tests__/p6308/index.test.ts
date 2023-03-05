import { exportWarp } from "../../src/p6308";
import { TreeHelper } from "../../src/p6308/TreeHelper";

describe("6308. Kth Largest Sum in a Binary Tree", () => {
  test.each([
    [[5, 8, 9, 2, 1, 3, 7, 4, 6], 2, 13],
    [[1, 2, null, 3], 1, 3],
  ])("case %#", (root, k, expected) => {
    // helper test
    expect(root).toStrictEqual(TreeHelper.toArray(TreeHelper.fromArray(root)));

    const tree = TreeHelper.fromArray(root);

    const result = exportWarp(tree, k);
    // const array = TreeHelper.toArray(result);

    expect(result).toStrictEqual(expected);
  });
});
