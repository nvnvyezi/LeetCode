/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 示例 1:
 * 输入: 16
 * 输出: true
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return /^1(00)*$/.test(num.toString(2));
};
