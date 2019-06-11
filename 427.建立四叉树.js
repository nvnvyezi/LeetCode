/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 * 我们想要使用一棵四叉树来储存一个 N x N 的布尔值网络。网络中每一格的值只会是真或假。树的根结点代表整个网络。对于每个结点, 它将被分等成四个孩子结点直到这个区域内的值都是相同的.
 * 每个结点还有另外两个布尔变量: isLeaf 和 val。isLeaf 当这个节点是一个叶子结点时为真。val 变量储存叶子结点所代表的区域的值。
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const len = grid.length;

  return insert(0, 0, len);

  function insert(x, y, offset) {
    let key = grid[x][y];

    for (let i = x; i < x + offset; i++) {
      for (let j = y; j < y + offset; j++) {
        if (grid[i][j] !== key) {
          const newOffset = Math.ceil(offset / 2),
            topLeft = insert(x, y, newOffset),
            topRight = insert(x, y + newOffset, newOffset),
            bottomLeft = insert(x + newOffset, y, newOffset),
            bottomRight = insert(x + newOffset, y + newOffset, newOffset);
          return new Node(
            false,
            false,
            topLeft,
            topRight,
            bottomLeft,
            bottomRight
          );
        }
      }
    }

    return new Node(key, true, null, null, null, null);
  }
};
