/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let S = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentS = currentHeight * currentWidth;

    S = Math.max(S, currentS);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return S;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
