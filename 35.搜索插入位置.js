/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pos;
  if ((pos = nums.indexOf(target)) !== -1) {
    return pos;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && target < nums[i]) {
      return 0;
    }
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
    if (i === nums.length - 1) {
      return nums.length;
    }
  }
};

var searchInsert = function(nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target <= nums[i]) {
        return i;
      }
    }
  }
};

var searchInsert = function(nums, target) {
  let pos = nums.findIndex(num => num >= target);
  return pos === -1 ? nums.length : pos;
};
