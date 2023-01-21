import { TreeNode } from "./TreeNode";

//  Definition for a binary tree node.
export class TreeHelper {
  static fromArray(array: (number | null)[]): TreeNode | null {
    if (array.length === 0) {
      return null;
    }

    if (array[0] === null) {
      return null;
    }

    const root = new TreeNode(array[0]);
    const queue: TreeNode[] = [root];

    let index = 1;
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === undefined) {
        throw new Error("Here is undefined");
      }

      if (current.left === null) {
        const val = array[index];
        if (val != null) {
          current.left = new TreeNode(val);
          queue.push(current.left);
        }
        index++;
      }

      if (current.right === null) {
        const val = array[index];
        if (val != null) {
          current.right = new TreeNode(val);
          queue.push(current.right);
        }
        index++;
      }
    }

    return root;
  }

  static toArray(root: TreeNode | null): (number | null)[] {
    if (root === null) {
      return [];
    }

    const array: (number | null)[] = [];
    array.push(root.val);

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const current = queue.shift();
      if (current === undefined) {
        throw new Error("Here is undefined");
      }

      if (current.left !== null) {
        array.push(current.left.val);
        queue.push(current.left);
      } else {
        array.push(null);
      }

      if (current.right !== null) {
        array.push(current.right.val);
        queue.push(current.right);
      } else {
        array.push(null);
      }
    }

    while (array[array.length - 1] === null) {
      array.pop();
    }

    return array;
  }

  static findNode(root: TreeNode | null, target: number): TreeNode | null {
    if (root === null) {
      return null;
    }

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
      const current = stack.pop();
      if (current === undefined) {
        throw new Error("Here is undefined");
      }

      if (current.val === target) {
        return current;
      }

      if (current.left !== null) {
        stack.push(current.left);
      }

      if (current.right !== null) {
        stack.push(current.right);
      }
    }

    return null;
  }
}
