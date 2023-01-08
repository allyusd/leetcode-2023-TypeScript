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
  // console.log(list1);
  // console.log(list2);

  if (list1 === null && list2 === null) {
    return null;
  }

  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let output = null;

  if (list1.val < list2.val) {
    output = list1;
    output.next = mergeTwoLists(list1.next, list2);
    // console.log(output);
  } else {
    output = list2;
    output.next = mergeTwoLists(list1, list2.next);
    // console.log(output);
  }

  return output;
}
