/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 当 needle 是空字符串时我们应当返回 0
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  return haystack.indexOf(needle);
};

// 耗时太长;
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  let start = -1;
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    let k = i;
    while (needle[j] === haystack[k] && haystack[k] && needle[j]) {
      j++;
      k++;
    }
    if (j === needle.length) {
      start = i;
      break;
    }
  }
  return start;
};

var strStr = function(haystack, needle) {
  const haylen = haystack.length;
  const needlelen = needle.length;
  if (needlelen === 0) {
    return 0;
  }
  if (needlelen > haylen) {
    return -1;
  }
  let i = 0;
  let j = 0;
  while (i < haylen) {
    if (haystack[i] === needle[j] && haystack[i] && needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
      if (haylen - i < needlelen) {
        return -1;
      }
    }
    if (j === needlelen) {
      return i - j;
    }
  }
  return -1;
};
