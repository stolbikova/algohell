/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;

  while (right > left) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
