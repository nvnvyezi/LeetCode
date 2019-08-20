/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const node = new ListNode();
  node.next = head;
  let temp2 = node;
  while (temp2.next) {
    if (temp2.next.next) {
      let temp = temp2.next.next.next;
      let temp1 = temp2.next;
      temp2.next = temp2.next.next;
      temp2.next.next = temp1;
      temp1.next = temp;
      temp2 = temp2.next.next;
    } else {
      break;
    }
  }
  return node.next;
};
