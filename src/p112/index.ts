export function exportWarp(root: TreeNode | null, targetSum: number): boolean {
  return hasPathSum(root, targetSum);
}

//  Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static fromArray(array: (number | null)[]): TreeNode | null {
    if (array.length === 0) {
      return null;
    }

    const rootVal = array[0];

    if (rootVal === null) {
      return null;
    }

    const root = new TreeNode(rootVal);

    const queue: TreeNode[] = [root];

    let i = 1;
    while (queue.length > 0) {
      const node = queue.shift();

      if (node === undefined) {
        throw new Error("非預期 undefined");
      }

      // left
      if (i >= array.length) {
        break;
      }
      let val = array[i];
      if (val !== null) {
        node.left = new TreeNode(val);
        queue.push(node.left);
      }
      i++;

      // right
      if (i >= array.length) {
        break;
      }
      val = array[i];
      if (val !== null) {
        node.right = new TreeNode(val);
        queue.push(node.right);
      }
      i++;
    }

    return root;
  }

  static toArray(tree: TreeNode | null): (number | null)[] {
    const output: (number | null)[] = [];
    const queue: TreeNode[] = [];

    if (tree === null) {
      return [];
    }

    output.push(tree.val);
    queue.push(tree);

    while (queue.length > 0) {
      const node = queue.shift();

      if (node === undefined) {
        throw new Error("非預期 undefined");
      }

      output.push(node.left === null ? null : node.left.val);
      if (node.left !== null) {
        queue.push(node.left);
      }

      output.push(node.right === null ? null : node.right.val);
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    while (output[output.length - 1] === null) {
      output.pop();
    }

    return output;
  }
}

// 2023-01-16
// 112. Path Sum
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return false;
}
