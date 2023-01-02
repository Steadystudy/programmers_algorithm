function solution(data, col, row_begin, row_end) {
  const hash = [...data].sort((a, b) => {
    if (a[col - 1] > b[col - 1]) return 1;
    if (a[col - 1] < b[col - 1]) return -1;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
  });
  let result = 0;
  for (let i = row_begin; i <= row_end; i++) {
    result ^= hash[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }
  return result;
}
