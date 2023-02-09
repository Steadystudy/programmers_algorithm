let sum = 0;
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(visited, row, col) {
  if (!visited[col][row]) return;
  sum += visited[col][row];
  visited[col][row] = false;
  for (let d of direction) {
    const newRow = row + d[0];
    const newCol = col + d[1];
    if (newRow >= 0 && newRow < visited[0].length && newCol >= 0 && newCol < visited.length) {
      dfs(visited, newRow, newCol);
    }
  }
}

function solution(maps) {
  const visited = maps.map((str) => str.split('').map((a) => (a === 'X' ? false : Number(a))));
  const result = [];
  maps.forEach((m, col) => {
    for (let row = 0; row < m.length; row++) {
      sum = 0;
      dfs(visited, row, col);
      if (sum) result.push(sum);
    }
  });
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
