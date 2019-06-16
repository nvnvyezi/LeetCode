/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let count = 0;
  let j = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let i = 0; i < g.length; i++) {
    for (; j < s.length; j++) {
      if (g[i] <= s[j]) {
        j++;
        count++;
        break;
      }
    }
  }
  return count;
};

var findContentChildren = function(g, s) {
  let count = 0;
  let i = 0;
  let j = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let leng = g.length;
  let lens = s.length;
  while (i < leng && j < lens) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }
  return count;
};
