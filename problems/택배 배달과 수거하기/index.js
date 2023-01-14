function solution(cap, n, deliveries, pickups) {
  let i = n - 1;
  let j = n - 1;
  const arr = [];
  while (i >= 0 || j >= 0) {
    if (deliveries[i] === 0) {
      i--;
      continue;
    }
    if (pickups[j] === 0) {
      j--;
      continue;
    }
    arr.push(Math.max(i, j) + 1);
    let sum = cap;
    for (; i >= 0; i--) {
      if (sum - deliveries[i] < 0) {
        deliveries[i] -= sum;
        break;
      }
      sum -= deliveries[i];
    }

    sum = cap;
    for (; j >= 0; j--) {
      if (sum - pickups[j] < 0) {
        pickups[j] -= sum;
        break;
      }

      sum -= pickups[j];
    }
  }
  return arr.reduce((acc, cur) => acc + 2 * cur, 0);
}
