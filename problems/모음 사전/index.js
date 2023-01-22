function sumSquare(idx) {
  let sum = 0;
  for(let i = 0; i <= idx; i++) { 
      sum += Math.pow(5, i);
  }
  return sum;
  }

function solution(word) {
  const vowels = { 'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4 };
  
  return word.split('').reduce((acc, cur, idx) => {
      return acc + vowels[cur] * sumSquare(4-idx) + 1
  }, 0)
}