function calcHeight(root) {
  if(!root){
    return -1;
  }

  const leftHeight = calcHeight(root.left);
  const rightHeight = calcHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

export { calcHeight };
