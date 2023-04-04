/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (65.50%)
 * Likes:    1633
 * Dislikes: 0
 * Total Accepted:    783.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1]
 * 输出：[[1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 2000] 内
 * -1000 <= Node.val <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const stack: TreeNode[] = [];
  const res: number[][] = [];
  if(root === null) {
    return res;
  }
  stack.push(root);
  while(stack.length) {
    let level: number[] = [];
    const size = stack.length; // 需要用一个常量把 stack.length 保存起来，不然每次i变化的时候，会对 stack.length 重新求值，导致for循环不在正常的节点跳出去
    for(let i = 0; i<size; i++) {
      const node = stack.shift();
      level.push(node.val);
      if(node.left) {
        stack.push(node.left)
      }
      if(node.right) {
        stack.push(node.right)
      }
    }
    res.push(level);
  }
  return res;
};
// @lc code=end

