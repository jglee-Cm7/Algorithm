// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/start/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var negA = A.filter(x => x<0);
  var posA = A.filter(x => x>=0);
  var candi = [];

  negA.sort((a,b) => a-b);
  posA.sort((a,b) => b-a);

  // console.log(negA);
  // console.log(posA);

  // 큰 음수 2개 * 큰 양수 1개
  if(negA.length >= 2 && posA.length >= 1)
  {
      candi.push(negA[0] * negA[1] * posA[0]);
  }

  // 큰 양수 3개
  if(posA.length >= 3)
  {
      candi.push(posA[0] * posA[1] * posA[2]);
  }

  // 작은 음수 3개
  if(negA.length >= 3)
  {
      candi.push(negA[negA.length-1] * negA[negA.length-2] * negA[negA.length-3]);
  }
  
  // console.log(candi);
  return Math.max(...candi);
}

