/**
 * 
 * 二分查找算法
 * 前提是数组必须按序排列
 * 
 * 时间复杂度：O(log2n)
 * 
 * **/

const arr = [1, 2, 5, 7, 10, 22],
  target = 2;

console.log(binSearch(arr, target), 'result');

function binSearch (arr, target) {
  let mid=0, sta=0, end=arr.length-1;
  while (sta <= end) {
    mid = getMid(sta, end);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      sta = mid + 1;
    }
  }
  return -1;
}

function getMid (sta, end) {
  return Math.floor((sta + end) / 2);
}
