function solution(users, emoticons) {
  const emoticonsDiscount = [];
  function makeArray(arr) {
    if (arr.length === emoticons.length) {
      emoticonsDiscount.push(arr);
      return;
    }
    for (let i = 10; i <= 40; i += 10) {
      makeArray([...arr, i]);
    }
  }
  makeArray([]);

  const answer = [0, 0];

  function dfs(discount) {
    let subscriber = 0;
    let totalCost = 0;
    users.forEach((user) => {
      let cost = 0;
      discount.forEach((dis, idx) => {
        if (dis >= user[0]) {
          cost += ((100 - dis) * emoticons[idx]) / 100;
        }
      });
      if (cost >= user[1]) {
        subscriber++;
      } else {
        totalCost += cost;
      }
    });
    if (subscriber > answer[0]) {
      answer[0] = subscriber;
      answer[1] = totalCost;
    }
    if (subscriber === answer[0] && totalCost >= answer[1]) {
      answer[0] = subscriber;
      answer[1] = totalCost;
    }
  }
  emoticonsDiscount.forEach((a) => {
    dfs(a);
  });
  return answer;
}
