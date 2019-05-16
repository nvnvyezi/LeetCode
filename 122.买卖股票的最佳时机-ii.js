/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce(
    (profit, price, i, prices) =>
      i > 0 && price > prices[i - 1] ? profit + price - prices[i - 1] : profit,
    0
  );
};
var maxProfit = function(prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;
};
