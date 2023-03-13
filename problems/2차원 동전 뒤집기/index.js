function solution(beginning, target) {
  const map = beginning.map((m, r) => {
    return m.map((c, i) => {
      return target[r][i] === c ? true : false;
    });
  });

  const pivot = map[0];
  const colLen = map.length;
  const rowLen = map[0].length;
  let col = 0;
  let row = 0;

  for (let i = 1; i < colLen; i++) {
    let newMap;
    if (map[i][0] === pivot[0]) {
      newMap = map[i];
    } else {
      newMap = map[i].map((c) => !c);
      col++;
    }
    for (let j = 1; j < rowLen; j++) {
      if (newMap[j] !== pivot[j]) {
        return -1;
      }
    }
  }
  pivot.forEach((coin) => {
    if (!coin) row++;
  });

  return Math.min(row + col, colLen + rowLen - col - row);
}
