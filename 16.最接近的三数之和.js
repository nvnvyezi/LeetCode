/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 *
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === temp) {
        return target;
      }
      if (nums[l] + nums[r] < temp) {
        const sum = nums[i] + nums[l] + nums[r];
        min = Math.abs(sum - target) > Math.abs(min - target) ? min : sum;
        l++;
        continue;
      }
      if (nums[l] + nums[r] > temp) {
        const sum = nums[i] + nums[l] + nums[r];
        min = Math.abs(sum - target) > Math.abs(min - target) ? min : sum;
        r--;
        continue;
      }
    }
  }
  return min;
};
// threeSumClosest([-1, 2, 1, -4], 1);
