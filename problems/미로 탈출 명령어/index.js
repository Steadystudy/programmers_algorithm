function solution(n, m, x, y, r, c, k) {
  const shortest = Math.abs(x - r) + Math.abs(y - c);
  let answer = '';
  let remain = k - shortest;
  if (remain < 0 || remain % 2 !== 0) return 'impossible';

  const direction = {
    l: 0,
    r: 0,
    u: 0,
    d: 0,
  };
  if (x > r) {
    direction['u'] += x - r;
  } else {
    direction['d'] += r - x;
  }
  if (y > c) {
    direction['l'] += y - c;
  } else {
    direction['r'] += c - y;
  }
  answer += 'd'.repeat(direction['d']);
  let d = Math.min(k / 2, n - (x + direction['d']));
  answer += 'd'.repeat(d);
  direction['u'] += d;
  remain -= 2 * d;

  answer += 'l'.repeat(direction['l']);
  let l = Math.min(k / 2, y - direction['l'] - 1);
  answer += 'l'.repeat(l);
  direction['r'] += l;
  remain -= 2 * l;

  answer += 'rl'.repeat(remain / 2);
  answer += 'r'.repeat(direction['r']);
  answer += 'u'.repeat(direction['u']);

  return answer;
}
