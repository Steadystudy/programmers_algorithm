function solution(dirs) {
  const direction = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  let position = [0, 0];
  const dp = new Map();
  for (let i = 0; i < dirs.length; i++) {
    const [dx, dy] = direction[dirs[i]];
    const x = position[0] + dx;
    const y = position[1] + dy;
    if (x > 5 || y > 5 || x < -5 || y < -5) continue;
    const prev = position.join('');
    const cur = `${x}${y}`;
    position = [x, y];
    if (!dp.has(prev + cur)) {
      dp.set(prev + cur, true);
      dp.set(cur + prev, true);
    }
  }
  return dp.size / 2;
}
