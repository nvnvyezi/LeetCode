/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 *
 * 示例:
 *
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * 进阶:
 *
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(s, nums) {
//   let count = Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     let count2 = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       count2++;
//       if (sum >= s) {
//         count = Math.min(count, count2);
//         break;
//       }
//     }
//   }
//   return count === Infinity ? 0 : count;
// };
var minSubArrayLen = function(s, nums) {
  let count = Infinity;
  let l = 0;
  let r = 0;
  let sum = 0;
  while (r < nums.length + 1) {
    if (sum >= s) {
      count = Math.min(count, r - l);
      sum -= nums[l++];
    } else {
      sum += nums[r++];
    }
  }
  return count === Infinity ? 0 : count;
};
// minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
