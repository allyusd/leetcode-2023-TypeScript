export function exportWarp(head: ListNode | null): ListNode | null {
  return reverseList(head);
}

//  * Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    static fromArray(array: number[]): ListNode | null {
      if (array.length === 0) {
        return null;
      }

      const head = new ListNode(array[0]);
      let preNode = head;

      for (let i = 1; i < array.length; i++) {
        let node = new ListNode(array[i]);
        preNode.next = node;
        preNode = node;
      }

      return head;
    };

    static toArray(head: ListNode | null): number[] {
      let array = [];
      let node = head;

      while(node!== null) {
        array.push(node.val);
        node = node.next;
      }

      return array;
    }
}

// 2023-01-15
// 206. Reverse Linked List
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
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

function reverseList(head: ListNode | null): ListNode | null {
  return null;
};
