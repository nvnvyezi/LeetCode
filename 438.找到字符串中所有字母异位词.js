/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 说明：
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 */
/**
 * 窗口滑动
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let len = p.length;
  let result = [];
  let left = 0;
  let right = 0;
  let obj = {};
  for (let item of p) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  }
  while (right < s.length) {
    if (obj[s[right++]]-- >= 1) len--;
    if (len === 0) result.push(left);
    if (right - left === p.length && obj[s[left++]]++ >= 0) {
      len++;
    }
  }
  return result;
};
