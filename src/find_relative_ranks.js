/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = score.map((s, idx) => [s, idx]).sort((a, b) => b[0] - a[0]);
  console.log(sorted);

  const res = new Array(sorted.length);
  for (let rank = 0; rank < sorted.length; rank++) {
    switch (rank) {
      case 0:
        res[sorted[rank][1]] = "Gold Medal";
        break;
      case 1:
        res[sorted[rank][1]] = "Silver Medal";
        break;
      case 2:
        res[sorted[rank][1]] = "Bronze Medal";
        break;
      default:
        res[sorted[rank][1]] = String(rank + 1);
    }
  }
  return res;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
