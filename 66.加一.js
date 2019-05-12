/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length - 1;
  let temp = 1;
  while (temp && len >= 0) {
    digits[len] = (temp = temp + digits[len--]) % 10;
    temp = parseInt(temp / 10);
  }
  if (temp) {
    digits.unshift(temp);
  }
  return digits;
};

var plusOne = function(digits) {
  let len = digits.length - 1;
  while (len >= 0) {
    if (digits[len] === 9) {
      digits[len] = 0;
      temp = 1;
    } else {
      digits[len] += 1;
      break;
    }
    len--;
  }
  if (len === -1) {
    digits.unshift(1);
  }
  return digits;
};
