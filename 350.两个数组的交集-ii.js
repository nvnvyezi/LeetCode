/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let min = nums1.length > nums2.length ? nums2 : nums1;
  let max = nums1.length > nums2.length ? nums1 : nums2;
  let res = [];
  for (let i = 0; i < min.length; i++) {
    let temp = -1;
    if ((temp = max.indexOf(min[i])) !== -1) {
      res.push(min[i]);
      max.splice(temp, 1);
    }
  }
  return res;
};

var intersect = function(nums1, nums2) {
  return nums1.filter(item => {
    let temp = nums2.indexOf(item);
    if (temp !== -1) {
      nums2.splice(temp, 1);
      return true;
    }
    return false;
  });
};
