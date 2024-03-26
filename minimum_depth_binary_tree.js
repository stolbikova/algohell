function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  // If one of the subtrees is empty, you should not consider it for finding the minimum depth.
  // Instead, you take the depth of the subtree that exists plus 1 (for the current node).
  if (root.left === null || root.right === null) {
    return Math.max(left, right) + 1;
  }

  return Math.min(left, right) + 1;
};

const node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(minDepth(node));
