function solution(picks, minerals) {
  let min = Infinity;

  const backTracking = (picks, arr, count) => {
    if (picks.every((el) => !el)) {
      min = Math.min(min, count);
      return;
    }

    for (let i = 0; i < picks.length; i++) {
      if (!picks[i]) continue;
      const tempPick = [...picks];
      const tempMinerals = [...arr];
      let tempCount = count;

      for (let c = 0; c < 5; c++) {
        if (tempMinerals.length === 0) break;
        const target = tempMinerals.shift();

        if (i === 1 && target === 'diamond') {
          tempCount += 5;
        } else if (i === 2 && target === 'diamond') {
          tempCount += 25;
        } else if (i === 2 && target === 'iron') {
          tempCount += 5;
        } else {
          tempCount += 1;
        }
      }
      tempPick[i] -= 1;

      backTracking(tempPick, tempMinerals, tempCount);
    }
  };
  backTracking(picks, minerals, 0);

  return min;
}
