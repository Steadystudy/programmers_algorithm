// 11번 케이스만 실패함 추후 수정
function solution(board) {
  const dp = {};
  const colLen = board.length;
  const rowLen = board[0].length;
  let pR;
  let pG;

  board.forEach((b, col) => {
    b.split('').forEach((chess, row) => {
      if (chess === 'R') pR = [col, row];
      if (chess === 'G') pG = [col, row];
    });
  });

  const goal = '' + pG[0] + pG[1];
  let data = [pR];
  let move = 0;

  while (data.length) {
    const newData = [];

    for (const d of data) {
      const [col, row] = d;
      const key = '' + col + row;
      if (dp[key]) continue;
      if (key === goal) return move;
      dp[key] = move;

      // 움직임 하
      for (let i = 1; i < colLen; i++) {
        if (col + i * 1 === colLen || board[col + i * 1][row] === 'D') {
          newData.push([col + i * 1 - 1, row]);
          break;
        }
      }
      // 움직임 상
      for (let i = 1; i < colLen; i++) {
        if (col + i * -1 < 0 || board[col + i * -1][row] === 'D') {
          newData.push([col + i * -1 + 1, row]);
          break;
        }
      }
      // 움직임 우
      for (let i = 1; i < rowLen; i++) {
        if (row + i * 1 === rowLen || board[col][row + i * 1] === 'D') {
          newData.push([col, row + i * 1 - 1]);
          break;
        }
      }
      // 움직임 좌
      for (let i = 1; i < rowLen; i++) {
        if (row + i * -1 < 0 || board[col][row + i * -1] === 'D') {
          newData.push([col, row + i * -1 + 1]);
          break;
        }
      }
    }

    move++;
    data = newData;
  }

  return -1;
}
