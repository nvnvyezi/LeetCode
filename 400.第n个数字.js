/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 注意:
 * n 是正数且在32为整形范围内 ( n < 231)。
 * 示例 1:
 * 输入:
 * 3
 * 输出:
 * 3
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n <= 9) {
    return n;
  }
  let base = 9;
  let digit = 1;
  while (n > digit * base) {
    n -= digit * base;
    digit++;
    base *= 10;
  }
  let business = (n - 1) / digit;
  let remainder = (n - 1) % digit;
  let num = Math.pow(10, digit - 1) + business;
  return num.toString()[remainder];
};
