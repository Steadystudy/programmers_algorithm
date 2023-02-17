function add(a, b) {
  return Number(a) + Number(b);
}
function minus(a, b) {
  return Number(a) - Number(b);
}
function multiply(a, b) {
  return a * b;
}

function solution(expression) {
  const exp = expression.split(/(\D)/);
  const priority = [
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '-', '*'],
    ['+', '*', '-'],
  ];
  let max;
  priority.forEach((d) => {
    const spl = [...exp];
    while (d.length) {
      const p = d.pop();
      let cal;
      switch (p) {
        case '*':
          cal = multiply;
          break;
        case '+':
          cal = add;
          break;
        case '-':
          cal = minus;
          break;
        default:
          return;
      }
      // '*' or '+' or '-'의 인덱스를 찾아낸 배열 생성
      const filtered = spl
        .map((x, i) => {
          return x === p ? i : '';
        })
        .filter((x) => x !== '');
      // 연산자가 나타나지 않았을 때 break
      if (!filtered.length) break;
      // 수식을 찾아낸 인덱스 값의 -1과 +1을 없애고 수식값으로 대체
      // -2idx한 이유는 splice로 인해 spl의 index가 줄어들기 때문
      filtered.forEach((f, idx) => {
        const k = f - 2 * idx;
        spl.splice(k - 1, 3, cal(spl[k - 1], spl[k + 1]));
      });
    }
    // spl 길이가 2이상인 경우 연산자 순서대로 나타나지 않았을 경우이다.
    if (spl.length === 1 && (!max || Math.abs(spl[0]) > max)) {
      max = Math.abs(spl[0]);
    }
  });
  return max;
}
