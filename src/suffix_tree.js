class Node {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

class SuffixTree {
  constructor(text) {
    this.root = new Node();
    this.text = text;
    this.buildSuffixTree();
  }

  buildSuffixTree() {
    for (let i = 0; i < this.text.length; i++) {
      this._addSuffix(this.text.substring(i), i);
    }
  }

  _addSuffix(suffix, index) {
    let currentNode = this.root;

    for (let char of suffix) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }

    currentNode.index = index;
  }

  printTree() {
    this.#_printNode(this.root, "");
  }

  #_printNode(node, prefix) {
    if (Object.keys(node.children).length === 0) {
      console.log(prefix + " [" + node.index + "]");
    } else {
      for (let char in node.children) {
        this.#_printNode(node.children[char], prefix + char);
      }
    }
  }

  searchPattern(pattern) {
    let currentNode = this.root;

    for (let char of pattern) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    this._collectIndices(currentNode, pattern);
    return true;
  }

  _collectIndices(node, prefix) {
    if (node.index !== -1) {
      console.log("Pattern found at index: " + node.index);
    }

    for (let char in node.children) {
      this._collectIndices(node.children[char], prefix + char);
    }
  }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log("Suffix Tree for '" + text + "':");
suffixTree.printTree();

const pattern = "ana";
console.log("Searching for pattern '" + pattern + "':");
