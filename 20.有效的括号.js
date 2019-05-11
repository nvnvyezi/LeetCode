/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) {
    return true;
  }
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const ele = s[i];
    if (ele === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      continue;
    }
    if (ele === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
      continue;
    }
    if (ele === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

var isValid = function(s) {
  if (!s) {
    return true;
  }
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    }
    if (map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
      continue;
    }
    return false;
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};
