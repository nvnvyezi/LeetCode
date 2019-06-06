/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sum1 = 0;
  for (let i = 0; i < s.length; i++) {
    sum1 += s[i].charCodeAt();
  }
  let sum2 = 0;
  for (let i = 0; i < t.length; i++) {
    sum2 += t[i].charCodeAt();
  }
  return String.fromCharCode(sum2 - sum1);
};

var findTheDifference = function(s, t) {
  s = s.split("");
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    let temp = t.indexOf(s[i]);
    if (temp !== -1) {
      t.splice(temp, 1);
    }
  }
  return t[0];
};
