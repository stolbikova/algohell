function merge(nums) {
  if (nums.length < 2) return nums;
  nums.sort((a, b) => a[0] - b[0]);
  let res = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const prev = res[res.length - 1];
    const cur = nums[i];

    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1]);
    } else {
      res.push(cur);
    }
  }

  return res;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
