/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 * 给定一个密钥字符串S，只包含字母，数字以及 '-'（破折号）。N 个 '-' 将字符串分成了 N+1 组。给定一个数字 K，重新格式化字符串，除了第一个分组以外，每个分组要包含 K 个字符，第一个分组至少要包含 1 个字符。两个分组之间用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。
 *
 * 给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。
 *
 * 示例 1：
 *
 * 输入：S = "5F3Z-2e-9-w", K = 4
 *
 * 输出："5F3Z-2E9W"
 *
 * 解释：字符串 S 被分成了两个部分，每部分 4 个字符；
 *      注意，两个额外的破折号需要删掉。
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  // let str = S.split("-").join("");
  let str = S.replace(/-/g, "");
  const res = [];
  while (str.length) {
    if (str.length > K) {
      res.unshift(str.slice(-K));
      str = str.slice(0, -K);
    } else {
      res.unshift(str);
      str = "";
    }
  }
  return res.join("-").toUpperCase();
};
