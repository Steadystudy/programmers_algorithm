function solution(k, ranges) {
  const collatz = new Map();
  const areas = [];
  let cur = k;
  let idx = 0;
  collatz.set(idx, cur);
  while (cur > 1) {
    if (cur % 2 === 1) {
      cur = 3 * cur + 1;
    } else {
      cur = cur / 2;
    }
    idx++;
    collatz.set(idx, cur);
  }

  for (const [key] of collatz) {
    if (key === 0) {
      areas.push(0);
      continue;
    }
    let area = 0;
    const y1 = collatz.get(key - 1);
    const y2 = collatz.get(key);
    area += Math.min(y1, y2);
    area += Math.abs(y1 - y2) / 2;
    area += areas[areas.length - 1];
    areas.push(area);
  }

  return ranges.map(([start, end]) => {
    const newEnd = areas.length + end - 1;
    if (newEnd < start) return -1;
    return areas[newEnd] - areas[start];
  });
}
