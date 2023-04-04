/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.31%)
 * Likes:    1017
 * Dislikes: 0
 * Total Accepted:    603.3K
 * Total Submissions: 790.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
  // 遍历的解法
  // let res: number[] = [];
  // traverse(root, res);
  // return res;
  // function traverse(node: TreeNode | null, container: number[]) {
  //   if(node === null) {
  //     return;
  //   }
  //   traverse(node.left, container);
  //   traverse(node.right, container);
  //   container.push(node.val);
  // }
  // 递归的解法
  let res: number[] = [];
  if(root === null) {
    return res;
  }
  const leftRes = postorderTraversal(root.left);
  const rightRes = postorderTraversal(root.right);
  return [...leftRes, ...rightRes, root.val];
};
// @lc code=end

