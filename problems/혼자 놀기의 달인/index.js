// 나의 답안 : test case 4, 6번만 안됨. 하지만 이유를 모르겠음
function solution(cards) {
  const visited = [];
  let first = 0;
  let second = 0;
  for (let i = 0; i < cards.length; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    const box = [];
    let a = cards[i] - 1;
    while (!box.includes(a)) {
      box.push(a);
      visited.push(a);
      a = cards[a] - 1;
    }
    const length = box.length;
    if (length > first) {
      first = length;
      continue;
    }
    if (length > second) {
      second = length;
      continue;
    }
  }
  return first * second;
}

// 찾아본 답안 : 백트래킹을 이용해서 지문 그대로 코드를 적음
function solution(cards) {
  let answer = 0;
  // 카드를 뽑아 이동하는 함수
  function drawCard(arr, num, group = []) {
    // 경유한 상자는 값을 0 으로 바꾸며 다시 0에 도착할 때까지 재귀
    if (arr[num - 1] === 0) return group.length;
    const newNum = arr[num - 1];
    group.push(newNum);
    arr[num - 1] = 0;
    return drawCard(arr, newNum, group);
  }
  // // 첫 상자 그룹 구성
  cards.forEach((card) => {
    // cards 배열 사본 생성
    const copy1 = [...cards];
    const first = drawCard(copy1, card);
    // 두 번째 상자 그룹 구성
    copy1.forEach((card2) => {
      // 열린 상자가 아니라면
      if (card2 !== 0) {
        // cards 배열 사본 생성
        const copy2 = [...copy1];
        const second = drawCard(copy2, card2);
        // 현재 최대치와 비교하여 더 큰 값을 할당
        answer = Math.max(answer, first * second);
      }
    });
  });
  return answer;
}

// 궁금한 점 : 테스트 케이스를 20개 넘게 만들어 봤지만 동일했다.
// 하지만 [1, 3, 5] 같이 예외적인 케이스는 값이 달라짐
