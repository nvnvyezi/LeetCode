/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

var missingNumber = function(nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  return sum - nums.reduce((pre, cur) => pre + cur, 0);
};
