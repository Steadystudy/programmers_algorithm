function solution(board) {
  const result = [];
  let countO = 0;
  let countX = 0;
  for (let i = 0; i < 3; i++) {
    let str = '';
    for (let j = 0; j < 3; j++) {
      const a = board[i][j];
      if (a === 'O') {
        countO++;
      }
      if (a === 'X') {
        countX++;
      }
      str += board[j][i];
    }
    result.push(str);
    result.push(board[i]);
  }
  result.push(board[0][0] + board[1][1] + board[2][2]);
  result.push(board[0][2] + board[1][1] + board[2][0]);

  if (countX > countO) return 0;
  if (countO - countX > 1) return 0;

  let winO = result.filter((x) => x === 'OOO').length;
  let winX = result.filter((x) => x === 'XXX').length;

  if (winO === 2 && winX === 0) return 1;
  if (winO + winX > 1) return 0;
  if (winO && countO === countX) return 0;
  if (winX && countO > countX) return 0;

  return 1;
}
