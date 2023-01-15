export function exportWarp(head: ListNode | null): boolean {
  return hasCycle(head);
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
// 141. Linked List Cycle
// Accepted
// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
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
function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  let node: ListNode | null = head;
  // 把所有的 node 存起來
  const nodeArray: ListNode[] = [];
  while (node !== null) {
    nodeArray.push(node);

    for (let i = 0; i < nodeArray.length; i++) {
      // 如果下一個 node 跟陣列中的相同，就是 Cycle
      if (nodeArray[i] === node.next) {
        return true;
      }
    }

    node = node.next;
  }

  return false;
}
