function solution(n) {
  const arr = [...new Array(n)].map((_, idx) => new Array(idx + 1).fill(0));
  const direction = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let num = 1;
  let r = -1;
  let c = 0;
  let t = n;
  let order = 0;
  const max = (n * (n + 1)) / 2;
  while (num <= max) {
    const [addR, addC] = direction[order % 3];
    for (let i = 0; i < t; i++) {
      r += addR;
      c += addC;
      arr[r][c] = num;
      num++;
    }
    t--;
    order++;
  }
  return arr.flatMap((num) => num);
}
