function merge(arr1, arr2) {
  let res = [];

  let i = 0;
  let j = 0;
  while (j < arr2.length && i < arr1.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  if (j < arr2.length) res = res.concat(arr2.slice(j));
  if (i < arr1.length) res = res.concat(arr1.slice(i));

  return res;
}

const res = merge([13, 14, 15], [1, 2, 3]);
console.log("Test 1", res);

console.log("Test 2", merge([1, 3], [2, 4]));
