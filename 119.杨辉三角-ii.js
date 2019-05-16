/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let temp = [1];
  if (rowIndex === 0) {
    return temp;
  }
  let res = [];
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      res[j] = (temp[j - 1] || 0) + (temp[j] || 0);
    }
    // temp = JSON.parse(JSON.stringify(res));
    temp = Object.assign([], res);
  }
  return res;
};
