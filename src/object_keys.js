const o1 = {
  211: "s",
  25: "e",
  "000": "y",
};

const o2 = {
  1641: "l",
  "0142": "o",
  "021": "c",
  53: "o",
};

o2.sortedVals = o1.sortedVals = sortedVals;

// Просто чтобы видеть, что выдают.
console.log(o1.sortedVals());
console.log(o2.sortedVals());

// Оба сравнения должны вернуть true.
console.log(o1.sortedVals() === "y-e-s");
console.log(o2.sortedVals() === "c-o-o-l");

function sortedVals() {
  const objEntries = Object.entries(this);

  const filtered = objEntries.filter((entry) => {
    return !Number.isNaN(parseInt(entry[0]));
  });

  filtered.sort((a, b) => {
    const key1 = parseInt(a[0], 10);
    const key2 = parseInt(b[0], 10);

    return key1 > key2 ? 1 : -1;
  });

  return filtered.map(([, value]) => value).join("-");
}
