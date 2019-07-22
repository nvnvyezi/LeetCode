/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
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
