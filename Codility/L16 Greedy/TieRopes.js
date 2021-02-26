// https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/start/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
  var count = 0;
  var ropeSum = 0;

  for(var i=0; i<A.length; i++) {
      // 묶은 매듭 확인
      if(ropeSum >= K) {
          count++;
          ropeSum = 0;
      }

      // 묶은게 K보다 작으면 무조건 묶는다.
      if(ropeSum < K) {
          ropeSum += A[i];
      }
  }

  if(ropeSum >= K)
      count++;

  return count;
}
