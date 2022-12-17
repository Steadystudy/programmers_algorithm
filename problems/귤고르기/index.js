function solution(k, tangerine) {
  const sortedArray = sortedArrayToMap(tangerine);
  let tangerineCountInBox = 0;
  let kind = 0;
  while (tangerineCountInBox < k) {
    tangerineCountInBox += sortedArray[kind][1];
    kind++;
  }
  return kind;
}

function sortedArrayToMap(tangerine) {
  const map = new Map();
  tangerine.forEach((a) => {
    if (map.has(a)) {
      const count = map.get(a);
      map.set(a, count + 1);
    } else {
      map.set(a, 1);
    }
  });

  return [...map].sort((a, b) => b[1] - a[1]);
}
