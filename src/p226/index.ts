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
  insert(array: (number | null)[]): TreeNode | null {
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
          const val = array[i];
          if (val !== null) {
            (current as any)[side] = new TreeNode(val);
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

  static formArray(array: (number | null)[]): TreeNode | null {
    if (array.length === 0) {
      return null;
    }

    const val = array.shift();
    if (val === null) {
      return null;
    }

    const root = new TreeNode(val);
    root.insert(array);

    return root;
  }

  static toArray(node: TreeNode | null, isRoot = true): (number | null)[] {
    if (node === null) {
      return [];
    }

    let output: (number | null)[] = [];

    if (isRoot) {
      output.push(node.val);
    }

    if (node.left) {
      output.push(node.left.val);
    }

    if (node.right) {
      if (!node.left) {
        output.push(null);
      }

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

  // swap
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
