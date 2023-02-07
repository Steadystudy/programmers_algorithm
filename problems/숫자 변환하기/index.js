function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let data = [x];
  while (data.length) {
    const newData = [];
    for (const d of data) {
      for (const newD of [d + n, d * 2, d * 3]) {
        if (newD > y || dp[newD]) continue;
        if (newD === y) return dp[d] + 1;
        dp[newD] = dp[d] + 1;
        newData.push(newD);
      }
    }
    data = newData;
  }
  return -1;
}
