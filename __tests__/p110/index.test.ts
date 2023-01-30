import { exportWarp } from "../../src/p110";
import { TreeHelper } from "../../src/p110/TreeHelper";

// No solution
describe.skip("110. Balanced Binary Tree", () => {
  test.each([
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
    [[], true],
  ])("case %#", (root, expected) => {
    // helper test
    expect(root).toStrictEqual(TreeHelper.toArray(TreeHelper.fromArray(root)));

    const tree = TreeHelper.fromArray(root);
    const result = exportWarp(tree);
    // const array = TreeHelper.toArray(result);

    expect(result).toStrictEqual(expected);
  });
});
