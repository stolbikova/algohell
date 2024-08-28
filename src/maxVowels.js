/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const isVowel = (x) => /[aeiouAEIOU]/.test(x);

  let count = 0;
  let maxVowelsCount = 0;

  // Initialize the first window
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      count++;
    }
  }
  maxVowelsCount = count;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) {
      count++;
    }

    if (isVowel(s[i - k])) {
      count--;
    }

    maxVowelsCount = Math.max(maxVowelsCount, count);
  }

  return maxVowelsCount;
};

console.log(maxVowels("abciiidef", (k = 3)) === 3);
console.log(maxVowels("aeiou", (k = 2)) === 2);
console.log(maxVowels("leetcode", (k = 3)) === 2);
console.log(maxVowels("tryhard", 4));
