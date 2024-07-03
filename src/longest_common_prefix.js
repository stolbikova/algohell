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
        prefix = prefix.slice(0, j); // corrected from tmp to prefix
        break;
      }
    }
    if (prefix === "") break;
  }
  return prefix;
};

var longestCommonPrefixFast = function (strs) {
  if (strs.length === 0) return "";

  const findPrefix = (strs, len) => {
    const prefix = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(prefix)) {
        return false;
      }
    }
    return true;
  };

  let minLen = Math.min(...strs.map((str) => str.length));
  let low = 1;
  let high = minLen;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (findPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].substring(0, (low + high) / 2);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // Output: "inters"
console.log(longestCommonPrefix(["throne", "dungeon"])); // Output: ""
console.log(longestCommonPrefix(["throne", "throne"])); // Output: "throne"
