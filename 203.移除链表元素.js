/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return null;
  }
  let pre = head;
  let pos = head.next;
  while (pos) {
    if (pos.val === val) {
      pos = pos.next;
      pre.next = pos;
    } else {
      pre = pos;
      pos = pos.next;
    }
  }
  if (head.val === val) {
    return head.next;
  }
  return head;
};
