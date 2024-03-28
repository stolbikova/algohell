function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function invertTree(root) {
  if (!root) return null;

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.right);
  invertTree(root.left);

  return root;
}

console.log(
  invertTree(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    )
  )
);
