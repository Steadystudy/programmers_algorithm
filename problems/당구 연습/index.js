function solution(m, n, startX, startY, balls) {
  return balls.map((ball) => {
    let min = Infinity;
    if (startY !== ball[1] || startX - ball[0] < 0) {
      min = Math.min(min, getDistance(ball[0] + startX, Math.abs(ball[1] - startY)));
    }
    if (startY !== ball[1] || startX - ball[0] > 0) {
      min = Math.min(min, getDistance(2 * m - startX - ball[0], Math.abs(ball[1] - startY)));
    }
    if (startX !== ball[0] || startY - ball[1] < 0) {
      min = Math.min(min, getDistance(Math.abs(ball[0] - startX), ball[1] + startY));
    }
    if (startX !== ball[0] || startY - ball[1] > 0) {
      console.log(Math.abs(ball[0] - startX), 2 * n - ball[1] - startY);
      min = Math.min(min, getDistance(Math.abs(ball[0] - startX), 2 * n - ball[1] - startY));
    }
    return min;
  });
}

function getDistance(a, b) {
  return a ** 2 + b ** 2;
}
