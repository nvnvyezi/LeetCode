/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 *
 * 示例 1:
 *
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 *
 *
 * 注意:
 *
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = nums.slice(0, k).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  let currentSum = sum;
  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - (nums[i - k] || 0);
    if (currentSum > sum) {
      sum = currentSum;
    }
  }
  return sum / k;
};
