module.exports = function recursion(tree) {
  const result = [];

  function buildTree(element, depth) {
    if (element.value) {
      if (!result[depth]) {
        result[depth] = [element.value];
      } else {
        result[depth].push(element.value);
      }
    }

    if (hasOwnProperty.call(element, 'left')) {
      buildTree(element.left, depth + 1);
    }

    if (hasOwnProperty.call(element, 'right')) {
      buildTree(element.right, depth + 1);
    }
  }

  buildTree(tree, 0);

  return result;
};
