/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > 0) {
    const num = parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
    return num > Math.pow(2, 31) - 1 ? 0 : num;
  } else {
    const str = x.toString();
    const arr = str.slice(1);
    const num = parseInt(
      `${str[0]}${arr
        .split("")
        .reverse()
        .join("")}`
    );
    return num < Math.pow(-2, 31) ? 0 : num;
  }
};

// var reverse = function(x) {
//   let limt = Math.pow(2, 31);
//   let mul = 1;
//   if (x < 0) {
//     mul = -1;
//     x *= mul;
//   } else {
//     limt -= 1;
//   }
//   let sum = 0;
//   while (x) {
//     sum = sum * 10 + (x % 10);
//     x = parseInt(x / 10);
//   }
//   if (sum > limt) {
//     return 0;
//   }
//   return sum * mul;
// };
