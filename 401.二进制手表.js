/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 * 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 * 案例:
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let res = [];
  for (let i = 0; i < 12; i++) {
    let count = 0;
    let ele = i.toString(2);
    for (let j = 0; j < 60; j++) {
      count = 0;
      let ele2 = j.toString(2);
      for (let k = 0; k < ele2.length; k++) {
        if (ele2[k] === "1") {
          count++;
        }
      }
      for (let l = 0; l < ele.length; l++) {
        if (ele[l] === "1") {
          count++;
        }
      }
      if (count === num) {
        res.push(`${i}:${j < 10 ? `0${j}` : j}`);
      }
    }
  }
  return res;
};
