import { exportWarp, ListNode } from "../../src/p19";

describe("19. Remove Nth Node From End of List", () => {
  test.each([
    [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    [[1], 1, []],
    [[1, 2], 1, [1]],
  ])("case", (head, n, expected) => {
    // 轉換正確
    expect(head).toStrictEqual(ListNode.toArray(ListNode.fromArray(head)));

    const tree = ListNode.fromArray(head);
    // console.log(tree);
    // console.log(JSON.stringify(tree));
    // console.log(TreeNode.toArray(tree));

    const result = exportWarp(tree, n);
    const array = ListNode.toArray(result);
    // console.log(array);
    expect(array).toStrictEqual(expected);
  });
});
