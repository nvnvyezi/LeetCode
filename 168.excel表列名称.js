/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) {
    return "";
  }
  let temp = 64;
  let res = "";
  while (n > 0) {
    let remainder = n % 26 === 0 ? 26 : n % 26;
    n = (n - remainder) / 26;
    res = String.fromCharCode(temp + remainder) + res;
  }
  return res;
};
