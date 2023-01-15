export function exportWarp(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return addTwoNumbers(l1, l2);
}

//  * Definition for singly-linked list.
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

    const head = new ListNode(array[0]);
    let preNode = head;

    for (let i = 1; i < array.length; i++) {
      const node = new ListNode(array[i]);
      preNode.next = node;
      preNode = node;
    }

    return head;
  }

  static fromArrayWithCycle(array: number[], pos: number): ListNode | null {
    if (array.length === 0) {
      return null;
    }

    const nodeArray: ListNode[] = [];

    const head = new ListNode(array[0]);
    let preNode = head;
    nodeArray.push(head);

    for (let i = 1; i < array.length; i++) {
      const node = new ListNode(array[i]);
      preNode.next = node;
      preNode = node;
      nodeArray.push(preNode);
    }

    if (pos >= 0 && pos < array.length) {
      preNode.next = nodeArray[pos];
    }

    return head;
  }

  static toArray(head: ListNode | null): number[] {
    const array = [];
    let node = head;

    while (node !== null) {
      array.push(node.val);
      node = node.next;
    }

    return array;
  }
}

// 2023-01-15
// 2. Add Two Numbers
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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return null;
}
