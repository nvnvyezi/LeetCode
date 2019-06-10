/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 *
 * 注意:
 * 假设字符串的长度不会超过 1010。
 *
 * 示例 1:
 *
 * 输入:
 * "abccccdd"
 *
 * 输出:
 * 7
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.delete(s[i]);
    } else {
      map.set(s[i], true);
    }
  }
  if (map.size) {
    return s.length - map.size + 1;
  } else {
    return s.length - map.size;
  }
};
