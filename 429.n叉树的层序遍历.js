/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let res = [[root.val]];
  let stack = [];
  if (root.children && root.children.length) {
    stack = [[...root.children]];
  }
  while (stack.length) {
    let temp = stack.shift();
    let children = [];
    let arr = [];
    for (let i = 0; i < temp.length; i++) {
      arr.push(temp[i].val);
      if (temp[i].children && temp[i].children.length) {
        children = children.concat(temp[i].children);
      }
    }
    if (children.length) {
      stack.push(children);
    }
    res.push(arr);
  }
  return res;
};

var levelOrder = function(root, list = [], level = 0) {
  if (!root) {
    return [];
  }
  if (level + 1 > list.length) {
    list.push([]);
  }
  list[level].push(root.val);
  for (const child of root.children) {
    levelOrder(child, list, level + 1);
  }
  return list;
};
