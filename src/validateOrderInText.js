function validateOrderInText(text, orderStr) {
  const orderMap = new Map();
  for (let i = 0; i < orderStr.length; i++) {
    orderMap.set(orderStr[i], i);
  }

  if (orderMap.get(text[0]) !== 0) {
    return false;
  }

  let prevChar = text[0];
  for (let j = 1; j < text.length; j++) {
    if (prevChar === text[j]) continue;

    const prevOrder = orderMap.get(prevChar);
    if (prevOrder + 1 !== orderMap.get(text[j])) {
      return false;
    }

    prevChar = text[j];
  }
  return true;
}

console.log(validateOrderInText("aaaabbbbcccc", "acb")); // returns false

console.log(validateOrderInText("aaaaccccbbbb", "acb")); // return true
