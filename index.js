import { calcHeight } from "./lib/height.js";
import { printTree } from "./lib/print.js";
import Tree from "./lib/Tree.js";

function start(tree) {
  const treeHeight = calcHeight(tree.root);

  console.log(treeHeight);
}

const test = () => {
  const tree = new Tree();

  tree.root = tree.insert(tree.root, 3);
  tree.root = tree.insert(tree.root, 5);
  tree.root = tree.insert(tree.root, 2);
  tree.root = tree.insert(tree.root, 1);
  tree.root = tree.insert(tree.root, 4);
  tree.root = tree.insert(tree.root, 6);
  tree.root = tree.insert(tree.root, 7);

  start(tree);

  printTree(tree.root);
}

test();
