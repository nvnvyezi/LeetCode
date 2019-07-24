/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
 *
 * 示例 :
 *
 * 输入:
 *
 *    1
 *     \
 *      3
 *     /
 *    2
 *
 * 输出:
 * 1
 *
 * 解释:
 * 最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 * 注意: 树中至少有2个节点。
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
var getMinimumDifference = function(root) {
  function LDR(node, nodeList = []) {
    node.left && LDR(node.left, nodeList);
    nodeList.push(node);
    node.right && LDR(node.right, nodeList);
    return nodeList;
  }
  const nodeList = LDR(root);
  let min = Infinity;
  for (let i = 0; i < nodeList.length - 1; i++) {
    min = Math.min(min, nodeList[i + 1].val - nodeList[i].val);
  }
  return min;
};

var getMinimumDifference = function(root) {
  function LDR(node) {
    const nodeList = [];
    const temp = [];
    if (node) {
      temp.push(node);
    }
    while (temp.length) {
      let curNode = temp[0];
      while (curNode.left && !nodeList.includes(curNode.left)) {
        temp.unshift(curNode.left);
        curNode = curNode.left;
      }
      curNode = temp.shift();
      nodeList.push(curNode);
      if (curNode.right) {
        temp.unshift(curNode.right);
      }
    }
    return nodeList;
  }
  const nodeList = LDR(root);
  let min = Infinity;
  for (let i = 0; i < nodeList.length - 1; i++) {
    min = Math.min(min, nodeList[i + 1].val - nodeList[i].val);
  }
  return min;
};
