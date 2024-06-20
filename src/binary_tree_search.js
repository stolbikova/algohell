function isValidBST(node) {
  if (node === null) return true;

  if (node.value > node.left && node.value < node.right) {
    isValidBST(node.left);
    isValidBST(node.right);
  } else {
    return false;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = null;

console.log("must be true", isValidBST(root));

root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(7);

console.log("must be true", isValidBST(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log("must be false", isValidBST(root));
