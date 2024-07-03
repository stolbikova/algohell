function findAnagrams(s, p) {
  const res = [];
  const pMap = new Map();
  const sMap = new Map();

  // populate pMap
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  const mapsEqual = (m1, m2) => {
    if (m1.size !== m2.size) return false;

    for (let [key, val] of m1) {
      if (val !== m2.get(key)) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);

    if (i >= p.length) {
      const left = i - p.length;

      if (sMap.get(s[left]) === 1) {
        sMap.delete(s[left]);
      } else {
        sMap.set(s[left], sMap.get(s[left]) - 1);
      }
    }

    if (mapsEqual(sMap, pMap)) {
      res.push(i - p.length + 1);
    }
  }
  return res;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
//  cba e
