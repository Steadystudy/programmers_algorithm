function solution(book_time) {
  const rooms = [];
  const newData = book_time.map((a) => {
    return a.map((time) => {
      return time
        .split(':')
        .reduce((acc, cur, idx) => (idx === 0 ? (acc += cur * 60) : (acc += cur * 1)), 0);
    });
  });

  newData.sort((a, b) => a[0] - b[0]);
  newData.forEach((d) => {
    const [start, end] = d;
    let enter = false;
    for (let j = 0; j < rooms.length; j++) {
      if (start >= rooms[j] + 10) {
        enter = true;
        rooms[j] = end;
        break;
      }
    }
    if (!enter) rooms.push(end);
  });

  return rooms.length;
}
