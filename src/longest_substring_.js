function longestSubarrayWithSumK(arr, k) {
  if (arr.length === 0) return 0;

  let l = 0;
  const map = new Map();
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    const cur = arr[right];
    sum += cur;
    if (sum === k) {
      l = Math.max(l, right + 1);
    }
    if (map.has(sum - k)) {
      l = Math.max(l, right - map.get(sum - k));
    }
    if (!map.has(sum)) map.set(sum, right);
  }

  return l;
}

console.log(longestSubarrayWithSumK([1, -1, 5, -2, 3], 3)); // Expected output: 4
console.log(longestSubarrayWithSumK([-2, -1, 2, 1], 1)); // Expected output: 2
