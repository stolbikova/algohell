/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let tmp = [1];
  for (let i = 1; i <= rowIndex; i++) {
    // backwards loop
    for (let j = i - 1; j > 0; j--) {
      tmp[j] = tmp[j] + tmp[j - 1];
    }

    tmp.push(1);
  }
  return tmp;
};

console.log(getRow(3));
