/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const tmp = String(x).split("");
  for (let i = 0; i < tmp.length / 2; i++) {
    if (tmp[i] !== tmp[tmp.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
