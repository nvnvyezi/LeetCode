/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 *
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 *
 * 示例 1:
 *
 * 输入: [1,3,2,2,5,2,3,7]
 * 输出: 5
 * 原因: 最长的和谐数组是：[3,2,2,2,3].
 * 说明: 输入的数组长度最大不超过20,000.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let counts = [];
  let count = 0;
  let res = 0;
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    count++;
    if (nums[i] !== nums[i + 1]) {
      counts.push(count);
      count = 0;
      if (counts.length === 2) {
        if (nums[i] - nums[l] === 1) {
          res = Math.max(res, counts[0] + counts[1]);
        }
        counts.shift();
      }
      l = i;
    }
  }
  return res;
};
// findLHS([-14, 1, 1, 2, 3, 3, 4, 13]);
