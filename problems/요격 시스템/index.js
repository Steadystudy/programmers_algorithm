function solution(targets) {
  let arr = [...targets].sort((a, b) => {
    return a[1] - b[1];
  });
  let target = Number(arr[0][1]) - 0.5;
  let result = 1;

  for (const [s, e] of arr) {
    if (e > target && s < target) {
      continue;
    }
    target = Number(e) - 0.5;
    result++;
  }

  return result;
}
