/**
 * leetcode #20 https://leetcode.cn/problems/valid-parentheses/
 * 
 * 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 3. 每个右括号都有一个对应的相同类型的左括号。
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (typeof s !== 'string') {
      return false;
  }
  if (s === '') {
      return false;
  }
  const arr = Array.from(s);
  const stack = []
  for (let i=0; i<arr.length; i++) {
      if (arr[i]==='(' || arr[i]==='{' || arr[i]==='[') {
          stack.push(arr[i]);
          continue;
      }
      const temp = stack.pop();
      if (arr[i]===')') {
          if (temp === '(') {
              continue;
          } else {
              return false;
          }
      } else if (arr[i] === '}') {
          if (temp === '{') {
              continue;
          } else {
              return false;
          }
      } else if (arr[i] === ']') {
          if (temp === '[') {
              continue;
          } else {
              return false;
          }
      }
  }
  if (stack.length > 0) {
      return false;
  }
  return true;
};
