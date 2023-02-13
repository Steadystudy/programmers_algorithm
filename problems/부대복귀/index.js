function solution(n, roads, sources, destination) {
  const map = {};
  roads.forEach(([start, end]) => {
    if (!map.hasOwnProperty(start)) map[start] = [];
    if (!map.hasOwnProperty(end)) map[end] = [];
    map[start].push(end);
    map[end].push(start);
  });

  const dp = {};
  dp[destination] = 0;
  let data = [...map[destination]];
  let distance = 1;
  while (data.length) {
    const newData = new Set();
    for (const d of data) {
      if (dp.hasOwnProperty(d)) continue;
      dp[d] = distance;
      map[d].forEach((item) => newData.add(item));
    }
    data = [...newData];
    distance++;
  }
  return sources.map((source) => (dp.hasOwnProperty(source) ? dp[source] : -1));
}
