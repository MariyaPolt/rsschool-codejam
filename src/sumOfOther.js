module.exports = function sumOfOther(array) {
  let result = [];
  let totalSum = 0;

  array.forEach((item) => {
    totalSum += item;
  });

  result = array.map(item => totalSum - item);
  return result;
};
