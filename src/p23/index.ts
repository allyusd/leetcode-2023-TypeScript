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

// 避免同名獨立出來
class Converter {
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
// 看到這一題直覺得想法，但是不確定這種把 Linked List 轉成 Array，
// 處理之後再轉回 Linked List 的做法是否有違反他的題意
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
  // 把 linked list 轉成 array 並且 合併
  let numberArray: number[] = [];
  for (const list of lists) {
    if (list !== null) {
      numberArray = numberArray.concat(Converter.toArray(list));
    }
  }

  // 排序
  numberArray.sort((a, b) => a - b);

  // 把 array 轉回 Linked list
  return Converter.fromArray(numberArray);
}
