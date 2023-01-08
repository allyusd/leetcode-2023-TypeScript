import { exportWarp, ListNode } from "../../src/p21";

function arrayToLinkedList(array: number[]): ListNode | null {
  if (array.length === 0) {
    return null;
  }

  let first: ListNode | null = null;
  let previous: ListNode | null = null;

  // console.log(array);
  array.forEach((item) => {
    // console.log(item);
    const node = new ListNode(item);
    if (first === null) {
      first = node;
    }

    if (previous) {
      previous.next = node;
    }

    previous = node;
  });

  return first;
}

function linkedListToArray(node: ListNode | null): number[] {
  if (node === null) {
    return [];
  }

  let output: number[] = [];

  output.push(node.val);
  output = output.concat(linkedListToArray(node.next));

  return output;
}

describe("21. Merge Two Sorted Lists", () => {
  test.each([
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4],
    ],
    [[], [], []],
    [[], [0], [0]],
    [
      [-100, -50, 25, 200],
      [-999, -75, 88],
      [-999, -100, -75, -50, 25, 88, 200],
    ],
  ])("case %p, %p", (list1, list2, expected) => {
    // console.log(arrayToLinkedList(list1));
    const result = linkedListToArray(exportWarp(arrayToLinkedList(list1), arrayToLinkedList(list2)));
    expect(result).toStrictEqual(expected);
  });
});
