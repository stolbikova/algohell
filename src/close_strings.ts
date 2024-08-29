/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const set1 = new Set(word1);
  const set2 = new Set(word2);

  if (set1.size !== set2.size || [...set1].some((c) => !set2.has(c))) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let char of word1) {
    map1.set(char, map1.has(char) ? map1.get(char) + 1 : 1);
  }
  for (let char of word2) {
    map2.set(char, map2.has(char) ? map2.get(char) + 1 : 1);
  }

  const freq1 = [...map1.values()].sort((a, b) => a - b);
  const freq2 = [...map2.values()].sort((a, b) => a - b);

  return (
    freq1.length === freq2.length &&
    freq1.every((val, index) => val === freq2[index])
  );
};

console.log(closeStrings("abc", "bca") === true);
console.log(closeStrings("cabbba", "abbccc") === true);
