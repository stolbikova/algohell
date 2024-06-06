function maxSumSubarray(nums, k) {
  let sum = 0;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];

    if (windowEnd >= k - 1) {
      sum = Math.max(windowSum, sum);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  return sum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
