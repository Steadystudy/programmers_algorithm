function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter((number) => {
      return !!number && isPrime(number);
    }).length;
}

function isPrime(N) {
  if (N < 2) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
