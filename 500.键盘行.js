/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 示例：
 *
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let arr = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
  ];
  const res = [];
  for (let j = 0; j < words.length; j++) {
    const ele = words[j];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(ele[k].toLocaleLowerCase())) {
        while (k < ele.length) {
          if (!arr[i].includes(ele[k].toLocaleLowerCase())) {
            break;
          }
          k++;
        }
        break;
      }
    }
    if (k === ele.length) {
      res.push(ele);
    }
  }
  return res;
};
