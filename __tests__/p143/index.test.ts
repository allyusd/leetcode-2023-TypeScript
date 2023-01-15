import { exportWarp, ListNode } from "../../src/p143";

describe("143. Reorder List", () => {
  test.each([
    [
      [1, 2, 3, 4],
      [1, 4, 2, 3],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 5, 2, 4, 3],
    ],
    // Wrong Answer
    [
      [1,2],
      [1,2],
    ],
  ])("case", (head, expected) => {
    const node = ListNode.fromArray(head);
    // console.log(node);
    // console.log(ListNode.toArray(node));
    exportWarp(node);
    const array = ListNode.toArray(node);
    // console.log(array);
    expect(array).toStrictEqual(expected);
  });
});
