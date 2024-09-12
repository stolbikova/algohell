/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let res = 0;

  // This function will check for paths starting from the current node
  const dfs = (node, currentSum) => {
    if (!node) return;

    // Update current sum by including the current node's value
    currentSum += node.val;

    // If currentSum equals targetSum, increment the result count
    if (currentSum === targetSum) {
      res++;
    }

    // Recursively search in the left and right children
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  };

  // This function will traverse the tree
  const traverse = (node) => {
    if (!node) return;

    // Start a depth-first search for each node
    dfs(node, 0);

    // Traverse the left and right subtrees
    traverse(node.left);
    traverse(node.right);
  };

  // Start traversing from the root
  traverse(root);

  return res;
};
