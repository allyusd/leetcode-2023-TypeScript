export function exportWarp(lists: Array<ListNode | null>): ListNode | null {
  return mergeKLists(lists);
}

// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(array: number[]): ListNode | null {
    if (array.length === 0) {
      return null;
    }
    const input = [...array];

    const first = input.shift();

    const head = new ListNode(first);
    let preNode = head;

    while (input.length > 0) {
      const val = input.shift();
      if (val === undefined) {
        throw new Error("Here is undefined");
      }

      const node = new ListNode(val);
      preNode.next = node;
      preNode = node;
    }

    return head;
  }

  static toArray(head: ListNode | null): number[] {
    if (head === null) {
      return [];
    }

    const array = [];
    array.push(head.val);
    let next: ListNode = head;
    while (next.next !== null) {
      next = next.next;
      array.push(next.val);
    }

    return array;
  }
}

// 2023-01-17
// 23. Merge k Sorted Lists
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  return null;
};
