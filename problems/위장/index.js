function solution(clothes) {
  const hash = {};
  let result = 1;

  clothes.forEach(([_, kind]) => {
    if (!hash.hasOwnProperty(kind)) {
      hash[kind] = 1;
    }
    hash[kind]++;
  });

  for (const key in hash) {
    result *= hash[key];
  }

  return result - 1;
}
