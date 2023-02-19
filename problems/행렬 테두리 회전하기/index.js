function solution(rows, columns, queries) {
  const result = [];
  const matrix = [...new Array(rows)].map((a) => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }
  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i].map((a) => a - 1);
    const stack = [];
    for (let i = y1; i < y2; i++) stack.push(matrix[x1][i]);
    for (let i = x1; i < x2; i++) stack.push(matrix[i][y2]);
    for (let i = y2; i > y1; i--) stack.push(matrix[x2][i]);
    for (let i = x2; i > x1; i--) stack.push(matrix[i][y1]);

    result.push(Math.min(...stack));
    const temp = stack.pop();
    stack.unshift(temp);

    for (let i = y1; i < y2; i++) matrix[x1][i] = stack.shift();
    for (let i = x1; i < x2; i++) matrix[i][y2] = stack.shift();
    for (let i = y2; i > y1; i--) matrix[x2][i] = stack.shift();
    for (let i = x2; i > x1; i--) matrix[i][y1] = stack.shift();
  }
  return result;
}
