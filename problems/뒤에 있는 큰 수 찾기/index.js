function solution(numbers) {
  const result = [...numbers];
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      result[i] = numbers[i + 1];
      while (arr.length) {
        const idx = arr.pop();
        if (numbers[idx] < numbers[i + 1]) {
          result[idx] = numbers[i + 1];
        } else {
          arr.push(idx);
          break;
        }
      }
    } else {
      arr.push(i);
    }
  }
  arr.forEach((a) => (result[a] = -1));
  return result;
}
