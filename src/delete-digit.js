const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = [];
  const nString = String(n);
  for (let i = 0; i < nString.length; i++) {
    newArr.push(+nString.replace(nString[i], ""));
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit,
};
