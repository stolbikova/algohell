/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num; // Update first if num is smaller than or equal to first
    } else if (num <= second) {
      second = num; // Update second if num is smaller than or equal to second
    } else {
      // If we find a number greater than both first and second, we found the triplet
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
console.log(increasingTriplet([1, 2, 1, 4, 5]));
