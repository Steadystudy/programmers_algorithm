function solution(n, left, right) {
  const result = [];
  let a = left % n;
  let b = right - Math.floor(left / n) * n;
  for (let i = 1; i <= n; i++) {
    if (i * n < left || (i - 1) * n > right) continue;
    let j = 1;
    while (j <= n) {
      if (i > j) {
        result.push(i);
      } else {
        result.push(j);
      }
      j++;
    }
  }
  return result.slice(a, b + 1);
}

// 다른 답안
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
