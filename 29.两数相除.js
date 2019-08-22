/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 示例 2:
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 说明:
 *
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let flag = (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let count = 0;
  while (divisor <= dividend) {
    let temp2 = divisor;
    let i = 1;
    while (dividend - temp2 >= 0) {
      dividend -= temp2;
      count += i;
      i += i;
      temp2 += temp2;
    }
  }
  count = flag ? -count : count;
  return Math.min(2147483647, Math.max(count, -2147483648));
};
