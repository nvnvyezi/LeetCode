/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 * 编写一个程序判断给定的数是否为丑数。
 *
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 *
 * 示例 1:
 *
 * 输入: 6
 * 输出: true
 * 解释: 6 = 2 × 3
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) {
    return false;
  }
  while (Number.isInteger(num / 2)) {
    num /= 2;
  }
  while (Number.isInteger(num / 3)) {
    num /= 3;
  }
  while (Number.isInteger(num / 5)) {
    num /= 5;
  }
  return num === 1;
};
