import { exportWarp, ListNode } from "../../src/p206";

describe("206. Reverse Linked List", () => {
  test.each([
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
    ],
    [
      [1, 2],
      [2, 1],
    ],
    [[], []],
  ])("case", (head, expected) => {
    const node = ListNode.fromArray(head);
    // console.log(node);
    // console.log(ListNode.toArray(node));
    const result = exportWarp(node);
    const array = ListNode.toArray(result);
    // console.log(array);
    expect(array).toStrictEqual(expected);
  });
});
