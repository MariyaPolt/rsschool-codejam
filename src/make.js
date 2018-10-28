module.exports = function make(...args) {
  const values = [];
  values.push(...args);

  function save(...args) {
    if (typeof args[0] === 'function') {
      return values.reduce((acc, item) => args[0](acc, item));
    }

    values.push(...args);

    return save;
  }

  return save;
}
