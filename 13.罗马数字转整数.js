/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        i++;
        sum += map["IV"];
        continue;
      }
      if (s[i + 1] === "X") {
        i++;
        sum += map["IX"];
        continue;
      }
    }
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        i++;
        sum += map["XL"];
        continue;
      }
      if (s[i + 1] === "C") {
        i++;
        sum += map["XC"];
        continue;
      }
    }
    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        i++;
        sum += map["CD"];
        continue;
      }
      if (s[i + 1] === "M") {
        i++;
        sum += map["CM"];
        continue;
      }
    }
    sum += map[s[i]];
  }
  return sum;
};

var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;
  let lastNum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const ele = map[s[i]];
    ele >= lastNum ? (sum += ele) : (sum -= ele);
    lastNum = ele;
  }
  return sum;
};
