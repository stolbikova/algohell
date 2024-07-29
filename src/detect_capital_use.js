function isUpperCase(letter) {
  return /^[A-Z]$/.test(letter);
}

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length < 2) return true;

  let allUpperCase = true;
  let allLowerCase = true;
  let firstLetterUpperCase = isUpperCase(word[0]) && !isUpperCase(word[1]);

  for (let i = 0; i < word.length; i++) {
    if (!isUpperCase(word[i])) {
      allUpperCase = false;
    }
    if (isUpperCase(word[i])) {
      allLowerCase = false;
    }
  }

  return (
    allUpperCase ||
    allLowerCase ||
    (firstLetterUpperCase && !allUpperCase && !allLowerCase)
  );
};

console.log("expects true", detectCapitalUse("ALINA")); // expects true
console.log("expects true", detectCapitalUse("Alina")); // expects true
console.log("expects false", detectCapitalUse("ALiNA")); // expects false
console.log("expects false", detectCapitalUse("AlINA")); // expects false
console.log("expects true", detectCapitalUse("alina")); // expects true
console.log("expects false", detectCapitalUse("aLINA")); // expects false
