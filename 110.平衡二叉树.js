/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 示例 1:
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回 true 。
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
 * @return {boolean}
 */
// 递归
var isBalanced = function(root) {
  if (!root) {
    return true;
  }
  function judge(node) {
    if (!node) {
      return 0;
    }
    return Math.max(judge(node.left), judge(node.right)) + 1;
  }
  const l = judge(root.left);
  const r = judge(root.right);
  if (Math.abs(l - r) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

// 非递归
var isBalanced = function(root) {
  if (!root) return true;
  const map = new Map();
  const arr = [];
  let pre;
  while (root || arr.length) {
    if (root) {
      arr.push(root);
      root = root.left;
    } else {
      root = arr[arr.length - 1];
      if (!root.right || root.right === pre) {
        pre = arr.pop();
        let l = map.get(pre.left) || 0;
        let r = map.get(pre.right) || 0;
        if (Math.abs(l - r) > 1) {
          return false;
        }
        map.set(pre, Math.max(l, r) + 1);
        root = null;
      } else {
        root = root.right;
      }
    }
  }
  return true;
};
