/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let mid = Math.floor(nums.length / 2);
  while (mid) {
    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      end = mid;
    } else if (nums[mid] > target) {
      start = mid;
    }
    mid = Math.floor((end - start) / 2);
  }
  return mid;
};

console.log(searchInsert([1, 3, 5, 6], (target = 5)));
