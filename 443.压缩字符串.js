/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 * 给定一组字符，使用原地算法将其压缩。
 * 压缩后的长度必须始终小于或等于原数组长度。
 * 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
 * 在完成原地修改输入数组后，返回数组的新长度。
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let len = chars.length;
  let count = 1;
  let l = 0;
  let r = 1;
  while (r < chars.length || count !== 1) {
    if (chars[r] === chars[l]) {
      count++;
      chars.splice(r, 1);
    } else {
      if (count > 1) {
        chars.splice(r, 0, ...String(count).split(""));
        l += 2;
        r += 2;
      } else {
        r += 1;
        l += 1;
      }
      count = 1;
    }
  }
  return chars.length;
};
