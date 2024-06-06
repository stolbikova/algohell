/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], (target = 5)));

// 3
// 1 2 3 4 5 6 7
