/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
 *
 * 示例1:
 *
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 *
 *
 * 示例2:
 *
 * 输入: 3
 * 输出: False
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if (c === 0) {
    return true;
  }
  let min = Math.sqrt(c);
  for (let i = 0; i < min; i++) {
    if (i * i === min) {
      return true;
    }
    const temp = Math.sqrt(c - i * i);
    if (temp === ~~temp) {
      return true;
    }
  }
  return false;
};
