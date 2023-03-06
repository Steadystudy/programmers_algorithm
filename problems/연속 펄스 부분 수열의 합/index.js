function solution(sequence) {
  const newSeq = sequence.map((num, i) => (i % 2 === 1 ? num * -1 : num));
  let result = 0;
  let data = [0, 0];
  newSeq.forEach((num) => {
    const newData = [];
    let min = Math.min(num, data[0] + num, data[1] + num);
    let max = Math.max(num, data[0] + num, data[1] + num);
    newData.push(min);
    newData.push(max);
    data = newData;
    if (Math.abs(min) > result) {
      result = Math.abs(min);
    }
    if (max > result) {
      result = max;
    }
  });

  return result;
}
