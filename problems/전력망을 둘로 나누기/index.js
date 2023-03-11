function solution(n, wires) {
  const graph = {};
  let answer = Infinity;
  for (const [start, end] of wires) {
    graph[start] = graph[start] ?? [];
    graph[end] = graph[end] ?? [];
    graph[start].push(end);
    graph[end].push(start);
  }

  for (const wire of wires) {
    const [start, end] = wire;
    const stack = [...graph[start]];
    let count = 1;
    const visited = {};
    visited[start] = true;
    visited[end] = true;

    while (stack.length) {
      const a = stack.pop();
      if (!visited[a]) {
        visited[a] = true;
        stack.push(...graph[a]);
        count++;
      }
    }

    answer = Math.min(answer, Math.abs(2 * count - n));
  }

  return answer;
}
