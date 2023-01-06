function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const length = queue1.length + queue2.length;
  let count = 0;
  let i = 0;
  let j = 0;
  while (sum1 !== sum2) {
    if (i > length || j > length || sum1 === 0 || sum2 === 0) {
      return -1;
    }
    if (sum1 > sum2) {
      const a = queue1[i];
      queue2.push(a);
      sum1 -= a;
      sum2 += a;
      i++;
    } else if (sum2 > sum1) {
      const a = queue2[j];
      queue1.push(a);
      sum1 += a;
      sum2 -= a;
      j++;
    }
    count++;
  }

  return count;
}
