/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 *
 * 示例 1:
 *
 * 输入: s = "egg", t = "add"
 * 输出: true
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let s2 = mapping(s);
  let t2 = mapping(t);
  if (s2 === t2) {
    return true;
  }
  return false;
  function mapping(str) {
    let s = "";
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
      if (!map.has(str[i])) {
        if (map.size === 0) {
          map.set(str[i], "A");
        } else {
          map.set(
            str[i],
            String.fromCharCode(map.get(str[i - 1]).charCodeAt() + 1)
          );
        }
      }
      s += map.get(str[i]);
    }
    return s;
  }
};

var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};
