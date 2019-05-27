/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   const arr = [];
//   let count = 0;
//   while (head) {
//     if (arr.includes(head.val)) {
//       return true;
//     }
//     head.val = head.val + "a" + count;
//     arr.push(head.val);
//     head = head.next;
//     count++;
//   }
//   return false;
// };

// var hasCycle = function(head) {
//   const map = new Map();
//   while (head && head.next) {
//     if (map.has(head)) {
//       return true;
//     } else {
//       map.set(head, true);
//     }
//     head = head.next;
//   }
//   return false;
// };

var hasCycle = function(head) {
  let pre = head;
  let fast = head;
  while (pre && pre.next && fast && fast.next) {
    pre = pre.next;
    fast = fast.next.next;
    if (pre === fast) {
      return true;
    }
  }
  return false;
};
