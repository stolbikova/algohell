var calculate = function (s) {
  let stack = [];
  let res = 0; // current result
  let num = 0; // for building the current number
  let sign = 1; // 1 means positive, -1 means negative

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      // Build the current number from digits
      num = num * 10 + (char - "0");
    } else if (char === "+" || char === "-") {
      // Process the previously built number
      res += sign * num;
      // Reset num to 0 for next number
      num = 0;
      // Update sign (+1 or -1)
      sign = char === "+" ? 1 : -1;
    } else if (char === "(") {
      // Push the result and sign into the stack before the new sub-expression
      stack.push(res);
      stack.push(sign);
      // Reset the result and sign for the new sub-expression
      res = 0;
      sign = 1;
    } else if (char === ")") {
      // Finish the current sub-expression
      res += sign * num;
      // Apply the sign and add to the result before the parenthesis
      res *= stack.pop(); // sign before the parenthesis
      res += stack.pop(); // result before the parenthesis
      // Reset num to 0 after processing
      num = 0;
    } else if (char === " ") {
      // Ignore spaces
      continue;
    }
  }

  // Add the last number to the result
  res += sign * num;

  return res;
};

// Testing the function with examples
console.log(calculate("1 + 1")); // Output: 2
console.log(calculate(" 2-1 + 2 ")); // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23
