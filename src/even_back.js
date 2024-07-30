function evenBack(str) {
  const revert = (init) => {
    return init.split("").reverse().join("");
  };

  const isWord = (word) => /^[A-Za-zА-Яа-яЁё]+$/.test(word);
  const arr = str.split(" ");
  const filtered = arr.filter((word) => isWord(word));

  return arr
    .map((word) => {
      // find the index in filetred array
      const index = filtered.findIndex((item) => word === item);

      return index % 2 !== 0 && isWord(word) ? revert(word) : word;
    })
    .join(" ");
}

console.log(evenBack("Look at the sky"));
console.log(evenBack("21 плюс 22 = сорок  три"));
console.log(evenBack(" - Как  я мог  об этом забыть ...?"));

console.log(evenBack("Look at the sky") === "Look ta the yks");
console.log(evenBack("21 плюс 22 = сорок  три") === "21 плюс 22 = корос  три");
console.log(
  evenBack(" - Как  я мог  об этом забыть ...?") ===
    " - Как  я мог  бо этом ьтыбаз ...?"
);
