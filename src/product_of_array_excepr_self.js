function productOfArray(arr) {
  const n = arr.length;
  const res = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    res[i] *= leftProduct;
    leftProduct *= arr[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return res;
}

console.log(productOfArray([1, 2, 3, 4, 5])); // Expected output: [120, 60, 40, 30, 24]
