/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 * 给定一个 N 叉树，找到其最大深度。
 *
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 *
 * 例如，给定一个 3叉树 :
 *
 * 我们应返回其最大深度，3。
 *
 * 说明:
 *
 * 树的深度不会超过 1000。
 * 树的节点总不会超过 5000。
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (root && (!root.children || !root.children.length)) {
    return 1;
  }
  const children = root.children;
  const res = children.reduce((init, cur) => {
    return init.concat(maxDepth(cur));
  }, []);
  return Math.max(...res) + 1;
};
