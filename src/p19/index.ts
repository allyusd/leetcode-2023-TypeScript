export function exportWarp(head: ListNode | null, n: number): ListNode | null {
  return removeNthFromEnd(head, n);
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

    let first = array[0];

    const head = new ListNode(first);
    let preNode = head;

    while(array.length > 0) {
      const val = array.shift();
      if (val === undefined) {
        throw new Error("Here is undefined");
      }

      const node = new ListNode(val);
      preNode.next = node;
      preNode = node;
    }

    return null;
  }

  static toArray(head: ListNode | null): number[] {
    if (head === null) {
      return [];
    }

    const array = [];
    array.push(head.val);
    let next:ListNode = head;
    while(next.next !== null) {
      next = next.next;
      array.push(next.val);
    }

    return array;
  }
}

// 2023-01-17
// 19. Remove Nth Node From End of List
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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  return null;
}
