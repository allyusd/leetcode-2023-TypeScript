import { exportWarp, ListNode } from "../../src/p23";

describe("23. Merge k Sorted Lists", () => {
  test.each([
    [[[1,4,5],[1,3,4],[2,6]], [1,1,2,3,4,4,5,6]],
    [[], []],
    [[[]], []],
  ])("case", (lists, expected) => {
    // 轉換正確
    if (lists.length > 0) {
      expect(lists[0]).toStrictEqual(ListNode.toArray(ListNode.fromArray(lists[0])));
    }

    const listArray: Array<ListNode | null> = [];

    for (let list of lists) {
      listArray.push(ListNode.fromArray(list));
    }

    // console.log(listArray);
    // console.log(JSON.stringify(listArray));
    // console.log(TreeNode.toArray(tree));

    const result = exportWarp(listArray);
    const array = ListNode.toArray(result);
    // console.log(array);
    expect(array).toStrictEqual(expected);
  });
});
