/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let r = ransomNote.split("");
  let m = magazine.split("");
  for (let i = r.length - 1; i >= 0; i--) {
    let temp;
    if ((temp = m.indexOf(r[i])) !== -1) {
      r.splice(i, 1);
      m.splice(temp, 1);
    }
  }
  return r.length === 0;
};
