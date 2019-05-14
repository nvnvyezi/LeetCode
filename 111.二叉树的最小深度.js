/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 非递归
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  const stack = [root];
  let depth = 1;
  let count = 0;
  let count2 = 1;
  while (stack.length) {
    let temp = stack.shift();
    count2--;
    if (temp.left) {
      count++;
      stack.push(temp.left);
    }
    if (temp.right) {
      count++;
      stack.push(temp.right);
    }
    if (!temp.left && !temp.right) {
      break;
    }
    if (count2 == 0) {
      count2 = count;
      count = 0;
      depth++;
    }
  }
  return depth;
};
