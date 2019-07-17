/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 *
 * 注意:
 *
 * 给定的整数保证在32位带符号整数的范围内。
 * 你可以假定二进制数不包含前导零位。
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let str = num.toString(2);
  let str1 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      str1.push(1);
    } else {
      str1.push(0);
    }
  }
  return parseInt(str1.join(""), 2);
};
