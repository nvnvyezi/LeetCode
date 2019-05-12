/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 示例 1:
 * 输入: 4
 * 输出: 2
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.trunc(Math.sqrt(x));
};

var mySqrt = function(x) {
  for (let i = 0; i < x / 2 + 1; i++) {
    if ((i * i < x && (i + 1) * (i + 1) > x) || i * i === x) {
      return i;
    }
  }
};

var mySqrt = function(x) {
  if (x < 2) return x;

  let small = mySqrt(x >> 2) << 1;
  let large = small + 1;
  if (large * large > x) return small;
  else return large;
};
