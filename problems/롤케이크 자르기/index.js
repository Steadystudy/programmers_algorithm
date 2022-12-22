function solution(topping) {
  let result = 0;
  const bro = new Set();
  const mine = new Map();
  topping.forEach((kind) => {
    mine.set(kind, (mine.get(kind) || 0) + 1);
  });

  for (let i = 0; i < topping.length; i++) {
    const kind = topping[i];
    mine.set(kind, mine.get(kind) - 1);
    bro.add(kind);

    if (mine.get(kind) === 0) {
      mine.delete(kind);
    }
    if (mine.size === bro.size) {
      result++;
    }
    if (bro.size > mine.size) {
      break;
    }
  }
  return result;
}
