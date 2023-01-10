function solution(fees, records) {
  const [basicTime, basicFee, additionalTime, additionalFee] = fees;
  const recordMap = {};
  records.forEach((record) => {
    const [time, car, enter] = record.split(' ');
    const [h, m] = time.split(':');
    const t = h * 60 + m * 1;
    if (!recordMap.hasOwnProperty(car)) recordMap[car] = 0;
    if (recordMap.hasOwnProperty(car)) {
      if (enter === 'OUT') {
        recordMap[car] += t;
      }

      if (enter === 'IN') {
        recordMap[car] -= t;
      }
    }
  });

  const result = [];
  for (const car in recordMap) {
    const totalParkTime = recordMap[car] > 0 ? recordMap[car] : 1439 + recordMap[car];
    const remain = totalParkTime - basicTime;
    if (remain <= 0) {
      result.push([car, basicFee]);
    }
    if (remain > 0) {
      const additionalPark = Math.ceil(remain / additionalTime);
      const extraFee = additionalPark * additionalFee;
      result.push([car, basicFee + extraFee]);
    }
  }
  return result.sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}
