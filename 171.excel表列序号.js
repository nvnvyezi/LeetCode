/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 *  * 给定一个Excel表格中的列名称，返回其相应的列序号。
 * 例如，
 *
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 *     ...
 * 示例 1:
 *
 * 输入: "A"
 * 输出: 1
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let sum = 0;
  let len = 0;
  while (len < s.length) {
    const temp = s.charCodeAt(len) - 64;
    if (len === s.length - 1) {
      sum += temp;
    } else {
      sum = (sum + temp) * 26;
    }
    len++;
  }
  return sum;
};
var titleToNumber = function(s) {
  let sum = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    sum += (s.charCodeAt(i) - 64) * Math.pow(26, len - i - 1);
  }
  return sum;
};
