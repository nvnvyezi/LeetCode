/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let temp = headA;
  const map = new Map();
  while (temp) {
    map.set(temp, temp.val);
    temp = temp.next;
  }
  temp = headB;
  while (temp) {
    if (map.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

var getIntersectionNode = function(headA, headB) {
  let tempA = headA;
  let tempB = headB;
  let count = 0;
  while (tempA && tempB) {
    if (tempA === tempB) {
      return tempA;
    }
    if (!tempA.next) {
      tempA = headB;
      count++;
    } else {
      tempA = tempA.next;
    }
    if (!tempB.next) {
      tempB = headA;
      count++;
    } else {
      tempB = tempB.next;
    }
    if (count === 4) {
      break;
    }
  }
  return null;
};
