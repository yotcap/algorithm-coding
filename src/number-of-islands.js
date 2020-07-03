/**
 * leetcode https://leetcode-cn.com/problems/number-of-islands/
 * 
 * 计算岛屿数量（广度优先搜索 DFS）
 * 
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let result = 0;
  if (!grid.length) return 0;
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(grid, i, j);
      }
    }
  }
  return result;
};

/**
 * 
 * @param {character[][]} grid 
 * @param {number} i - row key 
 * @param {number} j - column key
 */
function dfs(grid, i, j) {
  if (i<0 || j<0 || i>grid.length-1 || j>grid[i].length-1 || grid[i][j]==='0') return;
  grid[i][j] = '0';
  // 遍历上下左右
  for (position of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    dfs(grid, position[0]+i, position[1]+j);
  }
}


/**
 * 测试部分
 */
// result = 1
const island1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

// result = 3
const island2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(island1));   // 1
console.log(numIslands(island2));   // 3
