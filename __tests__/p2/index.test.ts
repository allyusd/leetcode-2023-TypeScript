import { exportWarp, ListNode } from "../../src/p2";

describe("2. Add Two Numbers", () => {
  test.each([
    [
      [2, 4, 3],
      [5, 6, 4],
      [7, 0, 8],
    ],
    [[0], [0], [0]],
    [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
      [8, 9, 9, 9, 0, 0, 0, 1],
    ],
  ])("case", (l1, l2, expected) => {
    const node1 = ListNode.fromArray(l1);
    const node2 = ListNode.fromArray(l2);
    // console.log(node1);
    // console.log(node2);
    // console.log(ListNode.toArray(node));
    const result = exportWarp(node1, node2);
    const array = ListNode.toArray(result);
    // console.log(array);
    expect(array).toStrictEqual(expected);
  });
});
