/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/\W/g, "").toLocaleLowerCase();
  const s2 = s
    .split("")
    .reverse()
    .join("");
  return s === s2;
};

var isPalindrome = function(s) {
  if (!s) {
    return true;
  }
  let l = 0;
  let r = s.length - 1;
  const reg = /\w/;
  while (l < r) {
    if (!reg.test(s[l])) {
      l++;
      continue;
    }
    if (!reg.test(s[r])) {
      r--;
      continue;
    }
    if (s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
