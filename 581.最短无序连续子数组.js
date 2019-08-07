/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 *
 * 你找到的子数组应是最短的，请输出它的长度。
 *
 * 示例 1:
 *
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 说明 :
 *
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let end = 0;
  let start = 0;
  let min = Infinity;
  let max = -Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[len - i - 1]);
    if (nums[i] < max) {
      end = i;
    }
    if (nums[len - 1 - i] > min) {
      start = len - i - 1;
    }
  }
  return !end && !start ? 0 : end - start + 1;
};
