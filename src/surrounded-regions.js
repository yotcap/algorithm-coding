/**
 * 
 * leetcode #130 https://leetcode-cn.com/problems/surrounded-regions/
 * 
 * 被围绕的区域
 * 
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
  console.log('origin data:::\n', board);
  if (!board || !(board instanceof Array) || !board.length) return;
  // 先将所有与边界相邻的 O 替换成 A，未与边界相邻的 O 则不变
  for (let i=0; i<board.length; i++) {
    // 第一行和最后一行
    if (i===0 || i===board.length-1) {
      // 将与边界相连的 O 改为 A
      for (let j=0; j<board[i].length; j++) {
        if (board[i][j] === 'O') {
          dfs(board, i, j);
        }
      }
    } else {
    // 除去首尾两行，处理每一行的首尾两端
      dfs(board, i, 0);
      dfs(board, i, board[i].length-1);
    }
  }
  console.log('temp data:::\n', board);

  // 处理筛选完后的数组
  // 将 O 替换成 X，将 A 替换成 O
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      board[i][j] = board[i][j] === 'X' ? 'X' :
        board[i][j] === 'O' ? 'X' : 'O';
    }
  }
  console.log('result data:::\n', board);
};

/**
 * 
 * @param {character[][]} board 
 * @param {number} i - row key
 * @param {number} j - column key
 */
function dfs(board, i, j) {
  if (i<0 || j<0 || i>board.length-1 || j>board[i].length-1 || board[i][j]==='X' || board[i][j]==='A') return;
  board[i][j] = 'A';
  for (position of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    dfs(board, position[0]+i, position[1]+j);
  }
}


/**
 * 测试部分
 */
const regions1 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
// * expect result
// regions1 = [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'X', 'X']
// ]

const regions2 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X'],
];
// * expect result
// regions2 = [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'O', 'X'],
// ];

const regions3 = [
  ['X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'X'],
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
];
// * expect result
// regions3 = [
//   ['X', 'X', 'X', 'X'],
//   ['O', 'O', 'O', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
// ];

const regions4 = [
  ['X', 'O', 'X', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'X'],
];
// * expect result
// regions4 = [
//   ['X', 'O', 'X', 'O', 'X', 'O'],
//   ['O', 'X', 'X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X', 'X', 'O'],
//   ['O', 'X', 'O', 'X', 'O', 'X'],
// ];

// solve(regions1);
// solve(regions2);
// solve(regions3);
solve(regions4);
