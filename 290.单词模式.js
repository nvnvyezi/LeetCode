/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 *
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 *
 * 示例1:
 *
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let mapa = new Map();
  let mapb = new Map();

  let stra = str.split(" ");
  if (pattern.length !== stra.length) {
    return false;
  }

  mapping(mapa, pattern);
  mapping(mapb, stra);
  for (let i = 0; i < pattern.length; i++) {
    if (mapa.get(pattern[i]) !== mapb.get(stra[i])) {
      return false;
    }
  }
  return true;

  function mapping(map, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!map.get(arr[i])) {
        const temp = map.get(arr[i - 1]);
        if (!temp) {
          map.set(arr[i], "A");
        } else {
          map.set(arr[i], String.fromCharCode(temp.charCodeAt() + 1));
        }
      }
    }
  }
};

var wordPattern = function(pattern, str) {
  let stra = str.split(" ");
  if (pattern.length !== stra.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== stra.indexOf(stra[i])) {
      return false;
    }
  }
  return true;
};
