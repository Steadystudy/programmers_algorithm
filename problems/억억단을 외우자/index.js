// 약수갯수 구하는 것은 서핑을 좀 했다.
function solution(e, starts) {
  const countArr = new Array(e + 1).fill(0);
  for (let i = 1; i <= e; i++) {
    for (let j = 1; j <= e / i; j++) {
      countArr[i * j]++;
    }
  }
  const sortedArr = countArr.map((c, i) => [c, i]).sort((a, b) => b[0] - a[0]);
  return starts.map((start) => {
    let i = 0;
    while (start > sortedArr[i][1]) {
      i++;
    }
    return sortedArr[i][1];
  });
}
