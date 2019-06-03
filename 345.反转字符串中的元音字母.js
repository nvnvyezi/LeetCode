/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split("");
  let l = 0;
  let r = s.length - 1;
  const arr = ["a", "o", "e", "i", "u", "A", "O", "E", "I", "U"];
  while (l < r) {
    if (arr.includes(s[l]) && arr.includes(s[r])) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
      continue;
    }
    if (!arr.includes(s[l])) {
      l++;
    }
    if (!arr.includes(s[r])) {
      r--;
    }
  }
  return s.join("");
};
