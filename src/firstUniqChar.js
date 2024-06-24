function firstUniqChar(str) {
  const map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }

  return -1;
}

console.log("Expected output: 0", firstUniqChar("leetcode"));
console.log("Expected output: 2", firstUniqChar("loveleetcode"));
