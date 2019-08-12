/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, res = []) {
  const init = [
    " ",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  if (digits.length === 0) {
    return res;
  }
  const arr = init[digits[0]];
  if (arr.length === 0) {
    return letterCombinations(digits.slice(1), res);
  }
  if (res.length === 0) {
    res = [...arr];
    return letterCombinations(digits.slice(1), res);
  }
  let ress = [];
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      ress.push(res[i] + arr[j]);
    }
  }
  return letterCombinations(digits.slice(1), ress);
};
