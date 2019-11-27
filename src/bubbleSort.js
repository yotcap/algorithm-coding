/**
 * 
 * 冒泡排序
 * 
 * 时间复杂度：O(n^2)
 * 
 */

const _U = require('../libs/utils');

const arr = _U.getRandomArr(10);

function bubbleSort (arr) {
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length-i-1; j++) {
      if (arr[j+1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(arr);
console.log(bubbleSort(arr));
