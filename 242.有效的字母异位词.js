/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return sort(s) === sort(t);
  function sort(str) {
    return str
      .split("")
      .sort()
      .join("");
  }
};

var isAnagram = function(s, t) {
  let map = {};
  s.split("").map(l => (map[l] = map[l] ? map[l] + 1 : 1));
  t.split("").map(l => (map[l] = map[l] ? map[l] - 1 : -1));
  return Object.keys(map).every(key => map[key] === 0);
};
