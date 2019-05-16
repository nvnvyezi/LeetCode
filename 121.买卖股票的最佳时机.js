/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > res) {
        res = prices[j] - prices[i];
      }
    }
  }
  return res;
};
var maxProfit = function(prices) {
  let res = 0;
  let temp = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < temp) {
      temp = prices[i];
    }
    if (prices[i] - temp > res) {
      res = prices[i] - temp;
    }
  }
  return res;
};
