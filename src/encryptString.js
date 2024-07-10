function encryptString(str, k) {
  let encrypted = [];
  for (let i = 0; i < str.length; i++) {
    const charIndex = (i + k) % str.length;
    encrypted.push(str[charIndex]);
  }
  return encrypted.join("");
}

console.log(encryptString("dart", 3));
console.log(encryptString("aaa", 1));
