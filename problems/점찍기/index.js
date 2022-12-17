function solution(k, d) {
  let sum = 0;
  for (let i = 0; i <= d; i += k) {
    const maxLength = Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(i, 2)));
    const count = Math.floor(maxLength / k);
    sum += count + 1;
  }
  return sum;
}
