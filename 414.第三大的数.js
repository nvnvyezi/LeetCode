/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * 示例 1:
 * 输入: [3, 2, 1]
 * 输出: 1
 * 解释: 第三大的数是 1.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = [...new Set(nums)];
  if (nums.length < 3) {
    return Math.max(null, ...nums);
  }
  return nums.sort((a, b) => b - a)[2];
};

var thirdMax = function(nums) {
  nums = [...new Set(nums)];
  if (nums.length < 3) {
    return Math.max(null, ...nums);
  }
  let digits = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > digits[0]) {
      if (nums[i] > digits[1]) {
        if (nums[i] > digits[2]) {
          digits[0] = digits[1];
          digits[1] = digits[2];
          digits[2] = nums[i];
        } else {
          digits[0] = digits[1];
          digits[1] = nums[i];
        }
      } else {
        digits[0] = nums[i];
      }
    }
  }
  return digits[0];
};
