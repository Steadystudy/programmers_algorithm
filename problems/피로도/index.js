function solution(k, dungeons) {
  let result = 0;
  function dfs(fatigue, arr, count) {
    for (let i = 0; i < arr.length; i++) {
      const a = [...arr];
      if (fatigue >= a[i][0]) {
        const f = fatigue - a[i][1];
        a.splice(i, 1);
        dfs(f, a, count + 1);
      }
    }
    if (count > result) result = count;
  }
  dfs(k, dungeons, 0);
  return result;
}
