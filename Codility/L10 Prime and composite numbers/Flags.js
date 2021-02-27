// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/start/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var flags = new Set();

  for (var i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) flags.add(A[i]);
  }

  return flags.size;
}
