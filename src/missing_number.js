function missing_number(nums) {
  const n = nums.length;
  const sum = (n * (n + 1)) / 2;
  return sum - nums.reduce((sum, cur) => cur + sum, 0);
}

console.log(missing_number([3, 0, 1]));
