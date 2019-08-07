/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 *
 * 例如，给定一个 3叉树 :
 * 返回其前序遍历: [1,3,5,6,2,4]。
 *
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, res = []) {
  if (!root) {
    return res;
  }
  res.push(root.val);
  if (root.children) {
    root.children.forEach(child => preorder(child, res));
  }
  return res;
};

var preorder = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const nodeList = [root];
  while (nodeList.length) {
    const node = nodeList.shift();
    res.push(node.val);
    if (node.children) {
      nodeList.unshift(...node.children);
    }
  }
  return res;
};
