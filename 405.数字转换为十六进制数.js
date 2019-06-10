/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
    return "0";
  }
  let res = "";
  if (num < 0) {
    num = 16 ** 8 + num;
  }
  while (num) {
    let remainder = num % 16;
    if (remainder > 9) {
      remainder = String.fromCharCode(remainder + 87);
    }
    res = remainder + res;
    num = Math.floor(num / 16);
  }
  // return num.toString(16);
  return res;
};
