// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/start/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  var result = 1
  var stack = [];

  for(var i=0; i<S.length; i++) {
      if(S[i] === '(') {
          stack.push(S[i]);
      }
      else {
          if(stack.pop() === undefined) {
              result = 0;
              break;
          }
      }
  }

  if(stack.length !== 0)
    result = 0;

  return result;
}
