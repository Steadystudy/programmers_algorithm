function solution(n, m, section) {
  let painted = 0;
  let paintNumber = 0;

  section.forEach((wall) => {
    if (painted <= wall) {
      painted = wall + m;
      paintNumber++;
    }
  });
  return paintNumber;
}
