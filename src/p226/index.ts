export function exportWarp(root: TreeNode | null): TreeNode | null {
  return invertTree(root);
}

// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  // JavaScript build Incomplete Binary Tree from an array
  // https://stackoverflow.com/a/62221949/2613884
  insert(array: number[]): TreeNode | null {
    if (array.length === 0) {
      return this;
    }

    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) {
        return this;
      }
      for (const side of ["left", "right"]) {
        if (!(current as any)[side]) {
          if (array[i] !== null) {
            (current as any)[side] = new TreeNode(array[i]);
          }
          i++;
          if (i >= array.length) {
            return this;
          }
        }
        if ((current as any)[side]) {
          queue.push((current as any)[side]);
        }
      }
    }
    return this;
  }

  static formArray(array: number[]): TreeNode | null {
    if (array.length === 0) {
      return null;
    }

    const root = new TreeNode(array.shift());
    root.insert(array);

    return root;
  }

  static toArray(node: TreeNode | null, isRoot = true): number[] {
    if (node === null) {
      return [];
    }

    let output: number[] = [];

    if (isRoot) {
      output.push(node.val);
    }

    if (node.left) {
      output.push(node.left.val);
    }

    if (node.right) {
      output.push(node.right.val);
    }

    output = output.concat(this.toArray(node.left, false));
    output = output.concat(this.toArray(node.right, false));

    return output;
  }
}

// 2023-01-11
// 226. Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  // const output = new TreeNode(1);
  // output.left = new TreeNode(2);
  // output.right = new TreeNode(3);
  // output.left.left = new TreeNode(4);
  // output.left.right = new TreeNode(5);

  // 4,7,2,9,6,3,1
  const output = new TreeNode(4);
  output.left = new TreeNode(7);
  output.right = new TreeNode(2);
  output.left.left = new TreeNode(9);
  output.left.right = new TreeNode(6);
  output.right.left = new TreeNode(3);
  output.right.right = new TreeNode(1);

  return output;
}
