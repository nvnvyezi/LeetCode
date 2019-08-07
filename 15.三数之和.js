/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length, nums[i] <= 0; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    let target = -nums[i];
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    while (l < r) {
      if (nums[r] + nums[l] === target) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l + 1] === nums[l]) {
          l++;
        }
        while (l < r && nums[r - 1] === nums[r]) {
          r--;
        }
        l++;
        r--;
      }
      if (nums[r] + nums[l] > target) {
        r--;
      }
      if (nums[r] + nums[l] < target) {
        l++;
      }
    }
  }
  return res;
};
// console.log(threeSum([0, 0, 0, 0]));
