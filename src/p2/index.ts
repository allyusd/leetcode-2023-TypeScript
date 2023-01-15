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
// Accepted
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
  if (l1 === null && l2 === null) {
    return null;
  }

  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  let head: ListNode | null = null;
  let preNode: ListNode | null = null;
  let overFlow = 0;

  let n1: ListNode | null = l1;
  let n2: ListNode | null = l2;
  while (n1 !== null || n2 !== null) {
    const v1 = n1 === null ? 0 : n1.val;
    const v2 = n2 === null ? 0 : n2.val;
    let v = v1 + v2 + overFlow;

    if (v >= 10) {
      overFlow = 1;
      v = v - 10;
    } else {
      overFlow = 0;
    }

    const node = new ListNode(v);

    if (head === null) {
      head = node;
    }

    if (preNode !== null) {
      preNode.next = node;
    }

    preNode = node;

    n1 = n1 === null ? null : n1.next;
    n2 = n2 === null ? null : n2.next;
  }

  if (overFlow !== 0) {
    const node = new ListNode(overFlow);

    if (preNode !== null) {
      preNode.next = node;
    }

    preNode = node;
  }

  return head;
}
