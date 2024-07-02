function longestSubstringWithKDistinct(s, k) {
  if (s.length < 1 || k === 0) return 0;

  let left = 0;
  let map = new Map();
  let len = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], map.has(s[right]) ? map.get(s[right]) + 1 : 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }

    len = Math.max(len, right - left + 1);
  }
  return len;
}

console.log(longestSubstringWithKDistinct("eceba", 2));
