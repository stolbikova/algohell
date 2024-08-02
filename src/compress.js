/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let writeIndex = 0;
  let i = 0;

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    // Count occurrences of the current character
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    // Write the character to the writeIndex
    chars[writeIndex] = char;
    writeIndex++;

    // Write the count to the writeIndex if greater than 1
    if (count > 1) {
      const countStr = count.toString();
      for (let j = 0; j < countStr.length; j++) {
        chars[writeIndex] = countStr[j];
        writeIndex++;
      }
    }
  }

  // Trim the array to the new length
  chars.length = writeIndex;

  return writeIndex;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // Output: 6, modifies chars to ["a","2","b","2","c","3"]
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // Output: 4, modifies chars to ["a","b","1","2"]
