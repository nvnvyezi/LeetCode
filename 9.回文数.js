/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let i = 0;
  x = x.toString();
  let len = parseInt(x.length / 2);
  for (i = 0; i < len; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      break;
    }
  }
  if (i === len) {
    return true;
  }
  return false;
};

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if (
    x.toString() ===
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  }
  return false;
};

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  return isRecursion(x, 0, x.length - 1);
};
var isRecursion = function(str, left, right) {
  if (left >= right) {
    return true;
  }
  if (str[left] === str[right]) {
    return isRecursion(str, left + 1, right - 1);
  }
  return false;
};
