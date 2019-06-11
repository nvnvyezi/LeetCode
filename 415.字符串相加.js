/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 注意：
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = [];
  let len1 = num1.length - 1;
  let len2 = num2.length - 1;
  let carry = 0;
  while (len1 !== -1 && len2 !== -1) {
    let remainder = (+num1[len1] + +num2[len2] + carry) % 10;
    carry = Math.floor((+num1[len1] + +num2[len2] + carry) / 10);
    res.unshift(remainder);
    len1--;
    len2--;
  }
  if (len1 !== -1) {
    for (let i = len1; i >= 0; i--) {
      let remainder = (+num1[i] + carry) % 10;
      carry = Math.floor((+num1[i] + carry) / 10);
      res.unshift(remainder);
    }
  }
  if (len2 !== -1) {
    for (let i = len2; i >= 0; i--) {
      let remainder = (+num2[i] + carry) % 10;
      carry = Math.floor((+num2[i] + carry) / 10);
      res.unshift(remainder);
    }
  }
  if (carry !== 0) {
    res.unshift(carry);
  }
  return res.join("");
};
