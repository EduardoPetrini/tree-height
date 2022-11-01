import Node from "./Node.js";

class Tree {
  constructor() {
    this.root = null;
  }

  insert(node, data) {
    if (!node) {
      node = new Node(data);

      return node;
    }

    if (data < node.data) {
      node.left = this.insert(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.insert(node.right, data);
      return node;
    }
  }
}

export default Tree;
