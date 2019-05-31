/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: true
 * 解释: 20 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let count = 0;
  while (true) {
    if (2 ** count > n) {
      return false;
    }
    if (2 ** count === n) {
      return true;
    }
    count++;
  }
};

var isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log(n / 4) / Math.log(2));
};

var isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1));
};

var isPowerOfTwo = function(n) {
  return n > 0 && n.toString(2).replace(/0/g, "") === "1";
};
