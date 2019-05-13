/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 示例 1:
 * 输入:       1         1
 *           / \       / \
 *          2   3     2   3
 *
 *         [1,2,3],   [1,2,3]
 *
 * 输出: true
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//递归
var isSameTree = function(p, q) {
  let strp = "";
  let strq = "";
  function recursion(tree, num) {
    if (num === 1) {
      strp += tree === null ? "null" : tree.val;
    } else {
      strq += tree === null ? "null" : tree.val;
    }
    if (tree === null) {
      return;
    }
    recursion(tree.left, num);
    recursion(tree.right, num);
  }
  recursion(p, 1);
  recursion(q, 2);
  if (strp === strq) {
    return true;
  }
  return false;
};

var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 循环
var isSameTree = function(p, q) {
  if (p === q) {
    return true;
  }
  if ((p === null && q) || (q === null && p)) {
    return false;
  }
  const arrp = [];
  const arrq = [];
  do {
    while (1) {
      if ((p === null && q) || (q === null && p)) {
        return false;
      }
      if (!p && !q) {
        break;
      }
      if (p.val !== q.val) {
        return false;
      }
      arrp.push(p);
      arrq.push(q);
      p = p.left;
      q = q.left;
    }
    p = arrp.pop().right;
    q = arrq.pop().right;
    if ((p === null && q) || (q === null && p)) {
      return false;
    }
  } while (arrp.length || arrq.length || (p && q));
  return true;
};
