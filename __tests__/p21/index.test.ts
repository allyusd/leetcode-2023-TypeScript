import { exportWarp, ListNode } from "../../src/p21";

function arrayToLinkedList(array: number[]): ListNode | null {
  if (array.length === 0) {
    return null;
  }

  let first: ListNode | null = null;
  let previous: ListNode | null = null;

  array.forEach((item) => {
    const node = new ListNode(item, previous);
    if (first === null) {
      first = node;
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
  test("Case 1", () => {
    const list1: number[] = [1, 2, 4];
    const list2: number[]  = [1, 3, 4];
    const output: number[]  = [1, 1, 2, 3, 4, 4];
    const result = linkedListToArray(exportWarp(arrayToLinkedList(list1), arrayToLinkedList(list2)));
    expect(result).toStrictEqual(output);
  });
  test("Case 2", () => {
    const list1: number[]  = [];
    const list2: number[]  = [];
    const output: number[]  = [];
    const result = linkedListToArray(exportWarp(arrayToLinkedList(list1), arrayToLinkedList(list2)));
    expect(result).toStrictEqual(output);
  });
  test("Case 3", () => {
    const list1: number[]  = [1, 2, 4];
    const list2: number[]  = [0];
    const output: number[]  = [0];
    const result = linkedListToArray(exportWarp(arrayToLinkedList(list1), arrayToLinkedList(list2)));
    expect(result).toStrictEqual(output);
  });
});
