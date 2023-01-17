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
  if (head === null) {
    return null;
  }

  let next: ListNode | null = head;
  let array: ListNode[] = [];

  // console.log(head);
  while (next !== null) {
    array.push(next);
    next = next.next;
  }

  // console.log(array);
  array = array.reverse();

  // console.log(n);
  // console.log(array.length);
  // 如果要移除的是第一個
  if (n === array.length) {
    return head.next;
  }

  const node = array[n];

  const lastNode = array[0];

  if (node === undefined) {
    throw new Error("Here is undefined");
  }

  // 如果要移除的是最後一個
  if (n === 1) {
    node.next = null;
  } else {
    node.next = lastNode;
  }

  return head;
}
