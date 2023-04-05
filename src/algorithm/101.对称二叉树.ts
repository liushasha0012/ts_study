/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (58.69%)
 * Likes:    2358
 * Dislikes: 0
 * Total Accepted:    802.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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

// function isSymmetric(root: TreeNode | null): boolean {
//   // 递归（动态规划）
//   if(root === null) {
//     return false;
//   }
//   return compareTwoTree(root.left, root.right);
//   function compareTwoTree(p: TreeNode, q: TreeNode): boolean {
//     if(p===null && q === null) {
//       return true;
//     }
//     if(p===null||q===null) {
//       return false;
//     }
//     if(p.val === q.val) {
//       const leftRes = compareTwoTree(p.left, q.right);
//       const rightRes = compareTwoTree(p.right, q.left);
//       return leftRes && rightRes;
//     } else {
//       return false;
//     }
//   }
// };
function isSymmetric(root: TreeNode | null): boolean {
  // 迭代
  if(root === null) return false;
  const stack: TreeNode[] = [];
  // 每次推入两个节点
  stack.push(root);
  stack.push(root);
  while(stack.length) {
    // 推出两个对称的节点做比较
    const q1 = stack.shift();
    const q2 = stack.shift();
    if(q1 === null && q2 === null) {
      continue;
    }
    if(q1 === null || q2===null) {
      return false;
    }
    if(q1.val !== q2.val) {
      return false;
    }
    stack.push(q1.left);
    stack.push(q2.right);
    stack.push(q1.right);
    stack.push(q2.left);
  }
  return true;
};
// @lc code=end

