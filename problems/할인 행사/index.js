function solution(want, number, discount) {
  let result = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const array = new Array(number.length).fill(0);
    discount.slice(i, i + 10).forEach((item) => {
      const index = want.indexOf(item);
      if (index > -1) {
        array[index]++;
      }
    });

    for (let j = 0; j < number.length; j++) {
      if (array[j] < number[j]) break;
      if (j === number.length - 1) result++;
    }
  }
  return result;
}
