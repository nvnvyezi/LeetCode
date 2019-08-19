/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  helper(n, n, "", res);
  function helper(l, r, path, res) {
    if (!l && !r) {
      res.push(path);
    }
    if (l > 0) {
      helper(l - 1, r, `${path}(`, res);
    }
    if (r > l) {
      helper(l, r - 1, `${path})`, res);
    }
  }
  return res;
};
