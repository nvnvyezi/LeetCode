/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let count = 1;
  while (true) {
    if (count ** 2 > num) {
      return false;
    }
    if (count ** 2 === num) {
      return true;
    }
    count++;
  }
};

/**
 * 公式法
 * num = n * n = n个奇数的和
 * exp: 1 = 1
 * exp: 4 = 1 + 3
 * exp: 9 = 1 + 3 + 5
 */
var isPerfectSquare = function(num) {
  let count = 1;
  while (num > 0) {
    num = num - count;
    if (num === 0) {
      return true;
    }
    count += 2;
  }
  return false;
};
