/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其自底向上的层次遍历为：
 *
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
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
 * @return {number[][]}
 */
// 非递归
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let arr = [root];
  const res = [];
  let arr2 = [];
  let arr3 = [];
  let temp;
  while (arr.length) {
    arr2 = [];
    arr3 = [];
    while (arr.length) {
      temp = arr.shift();
      arr2.push(temp.val);
      if (temp.left) {
        arr3.push(temp.left);
      }
      if (temp.right) {
        arr3.push(temp.right);
      }
    }
    res.unshift(arr2);
    arr = arr3;
  }
  return res;
};

// 递归
var levelOrderBottom = function(root) {
  const res = [];
  const dfs = (node, num) => {
    if (!node) {
      return;
    }
    if (res[num]) {
      res[num].push(node.val);
    } else {
      res.push([node.val]);
    }
    dfs(node.left, num + 1);
    dfs(node.right, num + 1);
  };
  dfs(root, 0);
  return res.reverse();
};
