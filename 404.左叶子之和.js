/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let count = 0;
  function dfs(root, flag) {
    if (!root) {
      return;
    }
    if (flag === 1 && !root.left && !root.right) {
      count += root.val;
    }
    dfs(root.left, 1);
    dfs(root.right);
  }
  dfs(root);
  return count;
};
