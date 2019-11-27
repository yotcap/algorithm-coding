/**
 * 
 * 有一个正整数数组，按顺序输出数组中最小的三个数的位置。注：不能先对数组做排序，要使用时间复杂度最低的算法。
 * 
 * 
 * **/

const _U = require('../libs/utils');

const n = 10,   // 数组中数的个数    如果使用 Math.min 最大值为：125276
  flagIndex = false;     // 只输出最小数的位置 还是位置和值       true 位置索引   false 索引+值
let arr = _U.getRandomArr(n);

/**
 * 
 * 不支持数组的数据量过大，最大为：125276
 * 此方法会改变原数组，慎用
 * 
 * **/
function findWho (arr) {
	let tempRes = [];
	function finder () {
		const id = arr.indexOf(Math.min(...arr));
		tempRes.push(flagIndex?id:{
			id: id,
			val: arr[id],
		});
		arr[id] = Math.max(...arr);
	}
	for (let i=0; i<3; i++) {
		finder();
	}
	return tempRes;
}

/**
 * 
 * 排挤算法
 * 有问题，先搁置
 * 
 * **/
// function findThirdM (arr) {
// 	let k=0, m=1, n=2;
// 	for (let i=0; i<arr.length; i++) {
// 		if (arr[i] <= arr[n]) {
// 			if (arr[i] <= arr[m]) {
// 				if (arr[i] <= arr[k]) {
//           // 交换相应的下标
// 					// k = m;
// 					// m = n;
//           // n = i;
//           n = m;
//           m = k;
//           k = i;
// 				} else {
// 					// k = m;
//           // m = i;
//           n = m;
//           m = i;
// 				}
// 			} else {
//         // k = i;
//         n = i;
// 			}
// 		}
//   }
//   return flagIndex?[k, m, n]:[
//     { id: k, val: arr[k] },
//     { id: m, val: arr[m] },
//     { id: n, val: arr[n] },
//   ]
// }

console.log(arr);
// console.log(findThirdM(arr));
console.log(findWho(arr));
