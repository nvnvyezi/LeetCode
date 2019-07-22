/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 * 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。
 *
 * (注：分数越高的选手，排名越靠前。)
 *
 * 示例 1:
 *
 * 输入: [5, 4, 3, 2, 1]
 * 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 * 提示:
 *
 * N 是一个正整数并且不会超过 10000。
 * 所有运动员的成绩都不相同。
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  arr = JSON.parse(JSON.stringify(nums));
  arr.sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === 0 && nums[i] === arr[j]) {
        res.push("Gold Medal");
        break;
      }
      if (j === 1 && nums[i] === arr[j]) {
        res.push("Silver Medal");
        break;
      }
      if (j === 2 && nums[i] === arr[j]) {
        res.push("Bronze Medal");
        break;
      }
      if (nums[i] === arr[j]) {
        res.push(String(j + 1));
        break;
      }
    }
  }
  return res;
};
// findRelativeRanks([10, 3, 8, 9, 4]);
