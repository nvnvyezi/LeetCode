/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 * 示例:
 *
 * 输入: 19
 * 输出: true
 * 解释:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 4) {
    return false;
  }
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += +str[i] * +str[i];
  }
  if (sum === 1) {
    return true;
  }
  return isHappy(sum);
};

var isHappy = function(n) {
  const seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sum(n);
  }
  return n === 1 ? true : false;
  function sum(str) {
    return str
      .toString()
      .split("")
      .reduce((pre, cur) => {
        return (pre += Math.pow(+cur, 2));
      }, 0);
  }
};
