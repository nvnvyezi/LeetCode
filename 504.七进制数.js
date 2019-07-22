/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 *
 * 示例 1:
 *
 * 输入: 100
 * 输出: "202"
 * 示例 2:
 *
 * 输入: -7
 * 输出: "-10"
 * 注意: 输入范围是 [-1e7, 1e7] 。
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (!num) {
    return "0";
  }
  const flag = num < 0 ? true : false;
  num = Math.abs(num);
  let res = "";
  while (num) {
    const remainder = num % 7;
    res = remainder + res;
    num = (num - remainder) / 7;
  }
  return flag ? `-${res}` : res;
};

// console.log(convertToBase7(-7));
