/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let max = -Infinity;
  let pos;
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= max) {
      max = nums[i];
    } else {
      break;
    }
  }
  pos = i;
  if (pos === -1) {
    return nums.reverse();
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[pos]) {
      let temp = nums[pos];
      nums[pos] = nums[i];
      nums[i] = temp;
      break;
    }
  }
  nums.splice(pos + 1, Infinity, ...nums.slice(pos + 1).reverse());
  return nums;
};
