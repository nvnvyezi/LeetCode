/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let lena = a.length - 1;
  let lenb = b.length - 1;
  let temp = 0;
  let str = [];
  while (lena >= 0 || lenb >= 0) {
    const aa = a[lena] ? +a[lena] : 0;
    const bb = b[lenb] ? +b[lenb] : 0;
    temp = aa + bb + temp;
    str.unshift(temp % 2);
    temp = parseInt(temp / 2);
    lena--;
    lenb--;
  }
  if (temp) {
    str.unshift(1);
  }
  return str.join("");
};

var addBinary = function(a, b) {
  var i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    res = "";
  while (i >= 0 || j >= 0 || carry > 0) {
    carry += i >= 0 ? parseInt(a[i--]) : 0;
    carry += j >= 0 ? parseInt(b[j--]) : 0;
    res = (carry % 2) + res;
    carry = Math.floor(carry / 2);
  }
  return res;
};
