/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 */
/**
 * @description 中心拓展法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
    return "";
  }
  let res = "";
  s = `#${s.split("").join("#")}#`;
  for (let i = 0; i < s.length; i++) {
    let l = (r = i);
    let temp = "";
    while (s[--l] && s[++r]) {
      if (s[l] !== s[r]) {
        break;
      }
      temp = s.slice(l, r + 1);
    }
    res = res.length > temp.length ? res : temp;
  }
  return res.split("#").join("");
};

/**
 * @description 动态规划
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
    return "";
  }
  s = `#${s.split("").join("#")}#`;
  let RL = [];
  let maxRight = 0;
  let pos = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (i < maxRight) {
      RL[i] = Math.min(RL[2 * pos - i], maxRight - i);
    } else {
      RL[i] = 1;
    }
    while (
      i - RL[i] >= 0 &&
      i + RL[i] < s.length &&
      s[i - RL[i]] === s[i + RL[i]]
    ) {
      RL[i]++;
    }
    if (maxRight < RL[i] + i - 1) {
      maxRight = RL[i] + i - 1;
      pos = i;
    }
    let temp = s.slice(i - RL[i] + 1, i + RL[i]);
    res = res.length > temp.length ? res : temp;
  }
  // console.log(RL);
  return res.split("#").join("");
};
// console.log(longestPalindrome("cbbd"));
