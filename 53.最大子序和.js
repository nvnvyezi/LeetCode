/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = cur < 0 ? nums[i] : cur + nums[i];
    sum = Math.max(cur, sum);
  }
  return sum;
};

var maxSubArray = function(nums) {
  return divide(nums, 0, nums.length);

  function divide(arr, l, r) {
    if (l === r) {
      return arr[l];
    }
    if (l === r - 1) {
      return Math.max(arr[l], Math.max(arr[r], arr[l] + arr[r]));
    }
    let mid = parseInt((l + r) / 2);
    let lmax = divide(arr, l, mid - 1);
    let rmax = divide(arr, mid + 1, r);
    let mmax = arr[mid]; // 从中间开始计算
    let sum = mmax; // 用来求和
    for (let i = mid - 1; i >= l; i--) {
      sum += arr[i];
      mmax = Math.max(mmax, sum);
    }
    sum = mmax;
    for (let i = mid + 1; i <= r; i++) {
      sum += arr[i];
      mmax = Math.max(mmax, sum);
    }
    return Math.max(lmax, Math.max(rmax, mmax));
  }
};
