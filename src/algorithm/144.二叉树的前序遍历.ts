/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (71.32%)
 * Likes:    1039
 * Dislikes: 0
 * Total Accepted:    830.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
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
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 
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

/**
 * 解法一：分解问题
function preorderTraversal(root: TreeNode | null): number[] {
  if(root === null) {
    return [];
  }
  let res = [];
  res.push(root.val);
  res = res.concat(preorderTraversal(root.left));
  res = res.concat(preorderTraversal(root.right));
  return res;
};

 */


// 解法二：遍历思路（耗时比第一种方法长）
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  traverse(root, res);
  return res;
};
function traverse(node: TreeNode | null, container: number[]): void {
  if(node === null) {
    return;
  }
  container.push(node.val);
  traverse(node.left, container);
  traverse(node.right, container);
}
// @lc code=end

