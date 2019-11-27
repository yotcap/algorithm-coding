/**
 * 
 * 判断是否是质数
 * 
 * 质数指大于1的自然数，除了1和自身外，无法被其他自然数整除的数。
 * 2是唯一一个既是偶数又是质数的数字。
 * 
 * **/

function isPrimeNum (num) {
  if (typeof num!=='number' || num<2) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num % 2 === 0) {   // 排除偶数
    return false;
  }
  const sq = Math.sqrt(num);
  // 只需要检查开方后的前半部分就可以了
  for (let i=3; i<=sq; i+=2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrimeNum(2));   // true
console.log(isPrimeNum(9));   // false
console.log(isPrimeNum(11));    // true
