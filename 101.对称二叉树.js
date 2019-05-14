/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }
  if (!root.left || !root.right) {
    return false;
  }
  if (root.left.val !== root.right.val) {
    return false;
  }
  let p = root.left;
  let q = root.right;
  function contrast(p, q) {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    if (p.val !== q.val) {
      return false;
    }
    return contrast(p.left, q.right) && contrast(p.right, q.left);
  }
  return contrast(p, q);
};

var isSymmetric = function(root) {
  function contrast(p, q) {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    if (p.val !== q.val) {
      return false;
    }
    return contrast(p.left, q.right) && contrast(p.right, q.left);
  }
  return contrast(root, root);
};

// 非递归
var isSymmetric = function(root) {
  if (!root) return true;
  const leftA = [root.left];
  const rightA = [root.right];
  while (leftA.length && rightA.length) {
    const l = leftA.pop();
    const r = rightA.pop();
    if (!l && !r) continue;
    if (!l || !r || l.val !== r.val) return false;
    leftA.push(l.left);
    rightA.push(r.right);
    leftA.push(l.right);
    rightA.push(r.left);
  }
  return true;
};
