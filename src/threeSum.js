var threeSum = function (nums) {
  nums = nums.sort();
  let res = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    const sum = nums[left] + nums[right] + nums[i];
    if (sum === 0) {
      res.push([nums[left], nums[right], nums[i]]);
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
