function solution(s) {
  const arrA = ['[', '(', '{'];
  const arrB = [']', ')', '}'];
  function isCorrect(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (!stack.length) {
        if (arrB.includes(str[i])) return false;
        stack.push(str[i]);
        continue;
      }
      if (arrA.includes(str[i])) {
        stack.push(str[i]);
      } else {
        const a = stack.pop();
        if (arrA.indexOf(a) !== arrB.indexOf(str[i])) {
          return false;
        }
      }
    }
    return !stack.length ? true : false;
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const a = s.slice(i) + s.slice(0, i);
    if (isCorrect(a)) result++;
  }
  return result;
}
