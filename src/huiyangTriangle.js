/**
 * 
 * 输出示例：
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 
 * 
 * **/


const row = 10;   // 行数
let arr = new Array();

generator();

function generator () {
  for (let i=0; i<row; i++) {
    let arrRow = [];
    for (let j=0; j<=i; j++) {
        if (i===0 || j===0 || i===j) {
          arrRow.push(1);
        } else {
          arrRow.push(arr[i-1][j-1] + arr[i-1][j]);
        }
    }
    console.log(arrRow.join(' ') + '\n');
    arr.push(arrRow);
  }
}
