// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/start/
// https://app.codility.com/demo/results/trainingB2C8KW-PSY/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  var perimeters = [];
  for (var i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      perimeters.push(2 * (i + N / i));
    }
  }

  return Math.min(...perimeters);
}
