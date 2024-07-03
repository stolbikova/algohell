var removeDuplicates = function (nums) {
  let unique = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[unique]) {
      unique++;
      nums[unique] = nums[i];
    }
  }
  return unique + 1;
};

// Test case
let nums = [1, 1, 1, 2, 2];
let len = removeDuplicates(nums);
console.log(len); // Output: 2

// 1 1 2
//   1 2
