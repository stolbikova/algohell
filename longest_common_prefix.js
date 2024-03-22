/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (j === strs[i].length || strs[i][j] !== prefix[j]) {
        prefix = tmp.slice(0, j);
        break;
      }
    }
    if (prefix === "") break;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
