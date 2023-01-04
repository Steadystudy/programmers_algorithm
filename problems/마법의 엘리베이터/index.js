function solution(storey) {
  let result = 0;
  let floor = String(storey);
  let lift = 0;
  for (let i = floor.length - 1; i >= 0; i--) {
    const num = Number(floor[i]) + lift;
    lift = 0;
    if (i === 0) {
      return num < 6 ? result + num : result + 11 - num;
    }

    if (num > 5) {
      lift++;
      result += 10 - num;
    }
    if (num < 5) {
      result += num;
    }
    if (num === 5) {
      if (Number(floor[i - 1]) >= 5) {
        lift++;
        result += 10 - num;
      } else {
        result += num;
      }
    }
  }
}
