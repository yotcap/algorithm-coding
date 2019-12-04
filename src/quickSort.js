/**
 * 
 * 快速排序
 * 使用分治法，从数组中选定一个基准数，剩余的数字按照相对于基准的大小分别压入两个数组中，然后再分别对数组做同样的事情，直至递归结束，合并即可。
 * 
 * 注：该方法会改变原数组，将中间位置的数删除，其他数字位置保持不变。
 * 
 * **/

const _U = require('../libs/utils');

function quickSort (arr) {
  if (arr.length <= 1) return arr;
  const flagIndex = Math.floor((arr.length-1)/2),
    flagValue = arr.splice(flagIndex, 1)[0];
  let leftArr=[], rightArr=[];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] < flagValue) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }
  return quickSort(leftArr).concat([flagValue], quickSort(rightArr));
}

const arr = _U.getRandomArr(10);

console.log(arr);               // [ 36, 13, 46, 12, 98, 36, 50, 91, 58, 84 ]
console.log(quickSort(arr));    // [ 12, 13, 36, 36, 46, 50, 58, 84, 91, 98 ]
console.log(arr);               // [ 36, 13, 46, 12, 36, 50, 91, 58, 84 ]
