/**
 * 
 * 找出小于一个数的所有质数
 * 
 * **/

function finder (num) {
  if (typeof num!=='number' || num<2) {
    return [];
  } else if (num === 2) {
    return [2];
  }
  let tempRes = [2];
  for (let i=3; i<=num; i+=2) {
    let sq = Math.sqrt(i),
      flagPrime = true;
    // 对每一个数都做检查
    for (let j=3; j<=sq; j+=2) {
      if (i % j === 0) flagPrime = false;
    }
    if (flagPrime) tempRes.push(i);
  }
  return tempRes;
}

console.log(finder(5));   // [ 2, 3, 5 ]
console.log(finder(50));    // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
