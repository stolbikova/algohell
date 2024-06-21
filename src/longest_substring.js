function lengthOfLongestSubstring(s) {
  let left = 0;
  const window = new Set();
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (window.has(s[right])) {
      left++;
      window.delete(s[right]);
    }

    window.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

// bca b cbb
// abc -> bca -> cab -> abc -> bcb -> cb
