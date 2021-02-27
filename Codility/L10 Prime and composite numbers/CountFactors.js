// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/start/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  var divisorSet = new Set();

  for (var i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      // console.log(i, N/i);
      divisorSet.add(i);
      divisorSet.add(N / i);
    }
  }

  // console.log(divisorSet);
  return divisorSet.size;
}
