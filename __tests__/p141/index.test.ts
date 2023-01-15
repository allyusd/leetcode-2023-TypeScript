import { exportWarp, ListNode } from "../../src/p141";

describe("141. Linked List Cycle", () => {
  test.each([
    [[3, 2, 0, -4], 1, true],
    [[1, 2], 0, true],
    [[1], -1, false],
    // 自已指向自己
    [[1], 0, true],
  ])("case", (head, pos, expected) => {
    const node = ListNode.fromArrayWithCycle(head, pos);
    // console.log(node);
    // console.log(ListNode.toArray(node));
    const result = exportWarp(node);
    expect(result).toStrictEqual(expected);
  });
});
