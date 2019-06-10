/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return new Array(n).fill(1).map((item, index) => {
    if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
      return "FizzBuzz";
    }
    if ((index + 1) % 3 === 0) {
      return "Fizz";
    }
    if ((index + 1) % 5 === 0) {
      return "Buzz";
    }
    return (index + 1).toString();
  });
};
