function solution(begin, target, words) {
  const visited = {};
  const queue = [begin];
  visited[begin] = 0;

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      if (checkConvertible(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }

  return visited[target] ?? 0;
}

function checkConvertible(str1, str2) {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
}
