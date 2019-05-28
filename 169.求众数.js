/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 摩尔投票算法
var majorityElement = function(nums) {
  let temp = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (temp === nums[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      count = 1;
      temp = nums[i];
    }
  }
  return temp;
};

var majorityElement = function(nums) {
  let frequency = Math.floor(nums.length / 2);
  nums.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (count > frequency) {
        return nums[i];
      } else {
        count = 1;
        continue;
      }
    }
    if (nums[i] === nums[i + 1]) {
      count++;
    }
  }
};

var majorityElement = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
