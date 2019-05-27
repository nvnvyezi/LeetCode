/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const pos = nums.indexOf(nums[i], i + 1);
    if (pos === -1) {
      return nums[i];
    } else {
      nums.splice(pos, 1);
    }
  }
};

var singleNumber = function(nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};
