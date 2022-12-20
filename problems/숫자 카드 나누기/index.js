function solution(arrayA, arrayB) {
  const gcdA = gcdInArray(arrayA, arrayA[0]);
  const gcdB = gcdInArray(arrayB, arrayB[0]);
  if (gcdA === 1 && gcdB === 1) return 0;

  const canDivideByGcdB = arrayA.some((a) => a % gcdB === 0);
  const canDivdedByGcdA = arrayB.some((b) => b % gcdA === 0);
  if (canDivideByGcdB === false && canDivdedByGcdA === false) return Math.max(gcdA, gcdB);
  if (canDivideByGcdB === false && gcdB !== 1) return gcdB;
  if (canDivdedByGcdA === false && gcdA !== 1) return gcdA;
  return 0;
}

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function gcdInArray(array, start) {
  return [...array].reduce((a, b, i, arr) => {
    if (gcd(a, b) === 1) {
      arr.splice(0);
      return 1;
    }
    return gcd(a, b);
  }, start);
}
