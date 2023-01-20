import { exportWarp } from "../../src/p235";
import { TreeHelper } from "../../src/p235/TreeHelper";

describe("235. Lowest Common Ancestor of a Binary Search Tree", () => {
  test.each([
    [
      [6,2,8,0,4,7,9,null,null,3,5],
      2,
      8,
      6,
    ],
    // [
    //   [6,2,8,0,4,7,9,null,null,3,5],
    //   2,
    //   4,
    //   2,
    // ],
    // [
    //   [2,1],
    //   2,
    //   1,
    //   2,
    // ],
  ])("case %#", (root, p, q, expected) => {
    // helper test
    expect(root).toStrictEqual(TreeHelper.toArray(TreeHelper.fromArray(root)));

    const tree = TreeHelper.fromArray(root);
    const nodeP = TreeHelper.findNode(tree, p);
    const nodeQ = TreeHelper.findNode(tree, q);
    const result = exportWarp(tree, nodeP, nodeQ);
    const array = TreeHelper.toArray(result);

    expect(array).toStrictEqual(expected);
  });
});
