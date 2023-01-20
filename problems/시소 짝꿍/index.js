function solution(weights) {
  weights.sort((a, b) => a - b);
  const ratios = [1, 4 / 3, 3 / 2, 2];
  const map = new Map();
  let result = 0;
  let count;
  for (let i = 0; i < weights.length; i++) {
    const a = weights[i];
    if (map.has(a)) {
      count = map.get(a);
      map.set(a, count - 1);
      result += count - 1;
      continue;
    }

    count = 0;
    for (let j = i + 1; j < weights.length; j++) {
      const b = weights[j];
      if (a * 2 < b) break;
      const ratio = b / a;
      if (ratios.includes(ratio)) count++;
    }
    map.set(a, count);
    result += count;
  }
  return result;
}
