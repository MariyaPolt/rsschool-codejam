module.exports = function sumOfOther(array) {
  let result = [];
  let total_sum = 0;

  array.forEach((item) => {
    total_sum += item;
  });

  result = array.map((item) => total_sum - item);

  return result;
}
