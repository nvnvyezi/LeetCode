/*
 * @lc app=leetcode.cn id=326 lang=javascript
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 示例 1:
 * 输入: 27
 * 输出: true
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return n.toString(3).replace(/[0]/g, "") === "1";
};
