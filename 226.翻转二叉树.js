/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 * 翻转一棵二叉树。
 *
 * 示例：
 *
 * 输入：
 *
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 输出：
 *
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root || (root.left === null && root.right === null)) {
    return root;
  }
  const res = {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  };
  return res;
};

var invertTree = function(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  const queue = [root];
  while (queue.length) {
    const temp = queue.shift();
    let l = temp.left;
    let r = temp.right;
    temp.left = r;
    temp.right = l;
    if (l) {
      queue.push(l);
    }
    if (r) {
      queue.push(r);
    }
  }
  return root;
};
