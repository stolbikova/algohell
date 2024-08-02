/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let prev = chars[0];
  let lastIndex = 1;

  for (let i = 1; i < chars.length; i++) {
    const char = chars[i];

    if (char === prev) {
      if (!Number.isNaN(parseInt(chars[i - 1], 10))) {
        chars[i - 1] = (parseInt(chars[i - 1], 10) + 1).toString();
      } else {
        chars[i] = "2";
        lastIndex++;
      }
    } else {
      lastIndex++;
    }
    prev = char;
  }

  return lastIndex;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// doesn't work with this test case
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
