function solution(elements) {
  const circular = [...elements, ...elements];
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length - 1; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
    if (i === elements.length - 1) {
      sum = elements.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }
  return set.size;
}
