export function exportWarp(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  return mergeTwoLists(list1, list2);
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 2023-01-08
// 21. Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let output = null;

  output = new ListNode(88);
  let node = new ListNode(55);
  output.next = node;

  return output;
}
