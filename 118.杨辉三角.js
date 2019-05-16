/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例:
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    let count = i + 1;
    const temp = [];
    while (count--) {
      const l = res[i - 1][count - 1] || 0;
      const r = res[i - 1][count] || 0;
      temp.unshift(l + r);
    }
    res.push(temp);
  }
  return res;
};
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  const res = new Array(numRows).fill().map(() => [].fill([]));
  res[0][0] = 1;
  if (numRows === 1) {
    return res;
  }

  for (let i = 1; i < numRows; i++) {
    for (let j = i; j >= 0; j--) {
      res[i][j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0);
    }
  }
  return res;
};
