
const text = [];

function mountText(root, i = 0) {
  if (!root) {
    return;
  }

  text[i] = `${text[i] ?? ''} ${root.data}`;
  mountText(root.left, i + 1);
  mountText(root.right, i + 1);
}

function printTree(root) {
  mountText(root);
  const printed = text.join("\n");

  console.log(printed);
}

export { printTree };
