function solution(s) {
  if (s.length === 1) {
    return 1;
  }
  let answer = [];
  for (let i = 1; i <= s.length / 2; i++) {
    let count = 1;
    let newStr = '';
    for (let j = 0; j < s.length; j += i) {
      let cur = s.substr(j, i);
      let next = s.substr(j + i, i);
      if (cur === next) {
        count++;
      } else {
        if (count === 1) {
          newStr += cur;
        } else {
          newStr += count + cur;
          count = 1;
        }
      }
    }
    answer.push(newStr.length);
  }
  return Math.min(...answer);
}
