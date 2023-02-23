function solution(maps) {
  const row = maps[0].length;
  const col = maps.length;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let start, end, lever;
  maps.forEach((map, i) => {
    for (let j = 0; j < map.length; j++) {
      const m = map[j];
      if (m === 'S') {
        start = [i, j];
      }
      if (m === 'L') {
        lever = [i, j];
      }
      if (m === 'E') {
        end = [i, j];
      }
    }
  });
  function move(start, end) {
    const visited = [...new Array(col)].map((a) => [...new Array(row)].fill(false));
    let data = [[start[0], start[1]]];
    let sec = 1;
    while (data.length) {
      const newData = [];
      for (const d of data) {
        for (const dir of direction) {
          const dx = d[0] + dir[0];
          const dy = d[1] + dir[1];
          if (dx < 0 || dy < 0 || dx === col || dy === row) {
            continue;
          }
          if (maps[dx][dy] === 'X' || visited[dx][dy]) continue;
          if (dx === end[0] && dy === end[1]) return sec;
          visited[dx][dy] = true;
          newData.push([dx, dy]);
        }
      }
      data = newData;
      sec++;
    }
    return -1;
  }
  const f = move(start, lever);
  if (f === -1) return -1;
  const s = move(lever, end);
  if (s === -1) return -1;
  return f + s;
}
