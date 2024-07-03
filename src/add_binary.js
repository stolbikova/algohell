/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a[i], 10);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j], 10);
      j--;
    }
    carry = Math.floor(sum / 2); //if sum exceeds the capacity of single bit
    res += (sum % 2).toString();
  }
  return res;
};

console.log(addBinary("11", "1"));
