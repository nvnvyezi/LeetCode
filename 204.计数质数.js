/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  function isPrime(num) {
    if (num === 2 || num === 3) {
      return true;
    }
    if (num % 6 !== 5 && num % 6 !== 1) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return count;
};

var countPrimes = function(n) {
  let count = 0;
  let arr = new Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      count++;
      for (let j = 2; j * i < n; j++) {
        arr[j * i] = false;
      }
    }
  }
  return count;
};
