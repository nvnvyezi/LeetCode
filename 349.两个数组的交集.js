/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = [];
  let arr = nums1.length > nums2.length ? nums1 : nums2;
  let arr2 = nums1.length > nums2.length ? nums2 : nums1;
  for (let i = 0; i < arr2.length; i++) {
    if (arr.includes(arr2[i]) && !res.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  return res;
};
