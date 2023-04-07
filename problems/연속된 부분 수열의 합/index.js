function solution(sequence, k) {
  let result;
  let min = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < sequence.length + 1) {
    if (sum === k) {
      if (min > end - start) {
        min = end - start;
        result = [start, end - 1];
      }
      sum -= sequence[start];
      start += 1;
    } else if (sum > k) {
      sum -= sequence[start];
      start += 1;
    } else if (sum < k) {
      sum += sequence[end];
      end += 1;
    }
  }

  return result;
}
