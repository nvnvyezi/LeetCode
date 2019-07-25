/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, curr = 0) {
  if (!l1 && !l2) {
    if (curr) {
      return new ListNode(curr);
    }
    return null;
  }
  if (!l1) {
    l1 = new ListNode(0);
  }
  if (!l2) {
    l2 = new ListNode(0);
  }
  l1.val = l1.val + l2.val + curr;
  curr = 0;
  if (l1.val > 9) {
    curr = 1;
    l1.val -= 10;
  }
  l1.next = addTwoNumbers(l1.next, l2.next, curr);
  return l1;
};
