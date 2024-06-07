function flatten(obj) {
  let res = {};

  const flt = (obj, prefix) => {
    for (let key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "string") {
        res[newKey] = value;
      } else if (typeof value === "object") {
        flt(value, newKey);
      }
    }
  };
  flt(obj, null);

  return res;
}

console.log(
  flatten({
    name: "Alina",
    other: {
      lastname: "Stolbikova",
      occupation: "developer",
      tags: ["data", "age", "height"],
    },
  })
);
