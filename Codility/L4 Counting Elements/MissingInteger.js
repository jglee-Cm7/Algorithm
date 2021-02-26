// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var result = 1;
  var newA = A.filter(x=>x>0).sort((a,b)=>a-b);

  //console.log(newA);

  for(var i=0; i<newA.length; i++) {
      if(newA[i] > result) {
          break;
      }
      else if(newA[i] === result) {
          result++;
      }
      //console.log(newA[i], result);
  }

  return result;
}
