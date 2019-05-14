/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3 。
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
// 非递归
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const arr = [{ num: 1, node: root }];
  let count = 1;
  while (1) {
    const n = arr.shift();
    if (n.node.left) {
      arr.push({ num: n.num + 1, node: n.node.left });
    }
    if (n.node.right) {
      arr.push({ num: n.num + 1, node: n.node.right });
    }
    if (!arr.length) {
      count = n.num;
      break;
    }
  }
  return count;
};

// 递归
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
