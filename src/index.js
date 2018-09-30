module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0 || array.length === 1) {
    return array.length;
  }
  array.sort((a, b) => a - b);

  let count = 1, arr = [];

  for (let i = 0, j = 1; j < array.length; ++i, ++j) {
    if ((++array[i]) === array[j]) {
      count++;
    } else {
      arr.push(count);
      count = 1;
    }
  }

  arr.sort((a, b) => b - a);

  return arr[0];
}
