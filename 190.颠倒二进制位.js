/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 * 颠倒给定的 32 位无符号整数的二进制位。
 *
 * 示例 1：
 *
 * 输入: 00000010100101000001111010011100
 * 输出: 00111001011110000010100101000000
 * 解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
 *       因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  let count = 32;
  while (count--) {
    res *= 2;
    res += n & 1;
    n = n >> 1;
  }
  return res;
};

var reverseBits = function(n) {
  let res = new Array(32).fill(0);
  let count = 0;
  while (n) {
    res[count++] = n % 2;
    n = Math.floor(n / 2);
  }
  res = res.join("");
  return Number.parseInt(res, 2);
};

var reverseBits = function(n) {
  return Number.parseInt(
    [...n.toString(2)]
      .reverse()
      .join("")
      .padEnd(32, "0"),
    2
  );
};
