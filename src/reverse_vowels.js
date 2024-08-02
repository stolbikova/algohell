/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let res = "";

  const isVowel = (x) => {
    return /[AEIOU]/.test(x.toUpperCase());
  };

  const reversedVowels = s.split("").filter((char) => isVowel(char));

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isVowel(char)) {
      res += reversedVowels.pop();
    } else {
      res += char;
    }
  }

  return res;
};

console.log(reverseVowels("hello") === "holle");
console.log(reverseVowels("leetcode") === "leotcede");
