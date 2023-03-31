function solution(plans) {
  const map = plans
    .map((plan) => {
      const [h, m] = plan[1].split(':');
      const start = h * 60 + m * 1;
      return [plan[0], start, Number(plan[2])];
    })
    .sort((a, b) => b[1] - a[1]);
  const result = [];
  const stack = [];
  const first = map.pop();
  let curTime = first[1];
  stack.push(first);

  while (map.length) {
    const pos = map.pop();
    const cur = stack.pop();
    const endTime = curTime + cur[2];

    if (pos[1] < endTime) {
      curTime = pos[1];
      stack.push([cur[0], cur[1], endTime - curTime]);
      stack.push(pos);
      continue;
    }

    curTime = endTime;
    result.push(cur[0]);
    while (curTime < pos[1] && stack.length) {
      const prev = stack.pop();
      if (curTime + prev[2] > pos[1]) {
        stack.push([prev[0], prev[1], curTime + prev[2] - pos[1]]);
        curTime = pos[1];
      } else {
        curTime += prev[2];
        result.push(prev[0]);
      }
    }
    curTime = pos[1];
    stack.push(pos);
  }

  return result.concat(stack.reverse().map((a) => a[0]));
}
