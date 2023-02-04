function solution(people, limit) {
  var answer = 0;
  let sorted = people.sort((a, b) => b - a);
  let max = 0;
  let min = sorted.length - 1;
  while (max <= min) {
    if (sorted[max] + sorted[min] <= limit) {
      min--;
    }
    max++;
    answer++;
  }
  return answer;
}
