/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 示例:
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 递归
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) {
    return null;
  }
  function build(l, r) {
    if (l > r) {
      return null;
    }
    let middle = parseInt(l + (r - l) / 2);
    let node = new TreeNode(nums[middle]);
    node.left = build(l, middle - 1);
    node.right = build(middle + 1, r);
    return node;
  }
  return build(0, nums.length - 1);
};
