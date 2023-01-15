export function exportWarp(head: ListNode | null): void {
  return reorderList(head);
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
// 143. Reorder List
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // 沒有東西直接離開
  if (head === null) {
    return;
  }

  // 只有一個元素直接離開
  if (head.next === null) {
    return;
  }

  let nodeArray: ListNode[] = [];

  let node: ListNode | null = head;
  while(node !== null) {
    nodeArray.push(node);
    node = node.next;
  }
  // console.log(nodeArray.length);

  let preNode: ListNode = head;
  let beginIndex = -1;
  let endIndex = -1;

  const mid = Math.floor(nodeArray.length / 2);
  // console.log(mid);
  for (let i = 0; i < mid; i++) {
    beginIndex = i;
    if (i !== 0) {
      preNode.next = nodeArray[i];
      preNode = nodeArray[i];
    }

    endIndex = nodeArray.length - 1 - i;
    preNode.next = nodeArray[endIndex];
    preNode = nodeArray[endIndex];
  }

  // 如果是奇數個元素，要把中間那個補上
  if (beginIndex + 1 !== endIndex) {
    preNode.next = nodeArray[beginIndex + 1];
    preNode = nodeArray[beginIndex + 1];
  }

  // 把最後一個元素的下一個指標改為空指標
  preNode.next = null;
}
