function solution(scores) {
  let fail = scores.some((s) => s[0] > scores[0][0] && s[1] > scores[0][1]);
  if (fail) return -1;

  const wanhoScore = scores[0][0] + scores[0][1];
  scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  let max = 0;
  let rank = 1;
  for (let i = 0; i < scores.length; i++) {
    const s = scores[i];
    if (max <= s[1]) {
      if (wanhoScore < s[0] + s[1]) {
        rank++;
      }
      max = s[1];
    }
  }
  return rank;
}
