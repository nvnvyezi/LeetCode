/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
 *
 * 示例 1:
 *
 * 输入:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 输出: [3, 14.5, 11]
 * 解释:
 * 第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
 * 注意：
 *
 * 节点值的范围在32位有符号整数范围内。
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const averageValueArray = [];
  let nodeArray = [];
  if (!root) {
    return averageValueArray;
  }
  let count = 1;
  let nodeSum = 0;
  nodeArray.push(root);
  while (nodeArray.length) {
    nodeSum = 0;
    count = 0;
    const tempArray = [];
    while (nodeArray.length) {
      let node = nodeArray.shift();
      nodeSum += node.val;
      count++;
      node.left && tempArray.push(node.left);
      node.right && tempArray.push(node.right);
    }
    nodeArray = tempArray;
    averageValueArray.push(nodeSum / count);
  }
  return averageValueArray;
};
