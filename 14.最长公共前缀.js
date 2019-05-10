/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = "";
  if (!strs.length) {
    return str;
  }
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length; i++) {
    const ele = strs[0][i];
    for (var j = 1; j < strs.length; j++) {
      const element = strs[j][i];
      if (ele !== element) {
        break;
      }
    }
    if (j !== strs.length) {
      break;
    }
    str += ele;
  }
  return str;
};

var longestCommonPrefix = function(strs) {
  let str = "";
  if (!strs.length) {
    return str;
  }
  str = strs[0];
  if (strs.length === 1) {
    return str;
  }
  for (let i = 1; i < strs.length; i++) {
    let j = str.length;
    while (j >= 0) {
      if (str === strs[i].substr(0, j)) {
        break;
      }
      j--;
      str = str.substr(0, j);
    }
    if (!str) {
      return "";
    }
  }
  return str;
};

var longestCommonPrefix = function(strs) {
  let str = "";
  if (!strs.length) {
    return str;
  }
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length; i++) {
    const ele = strs[0][i];
    if (strs.every(l => l[i] === ele)) {
      str += ele;
    } else {
      return str;
    }
  }
  return str;
};
