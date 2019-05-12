/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 如果不存在最后一个单词，请返回 0 。
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 示例:
 * 输入: "Hello World"
 * 输出: 5
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s === "") {
    return 0;
  }
  const reg = /[a-zA-Z]+/;
  const str = s.trim().split(" ");
  const len = str.length;
  if (reg.test(str[len - 1])) {
    return str[len - 1].length;
  }
  return 0;
};

var lengthOfLastWord = function(s) {
  s = s.trim();
  if (s === "") {
    return 0;
  }
  return s.length - (s.lastIndexOf(" ") + 1);
};

var lengthOfLastWord = function(s) {
  let temp = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      temp = 0;
    } else {
      temp++;
      sum = temp;
    }
  }
  return sum;
};
