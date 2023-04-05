/*
 * @lc app=leetcode.cn id=1008 lang=typescript
 *
 * [1008] 前序遍历构造二叉搜索树
 *
 * https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/description/
 *
 * algorithms
 * Medium (71.97%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    28.8K
 * Total Submissions: 40K
 * Testcase Example:  '[8,5,1,7,10,12]'
 *
 * 给定一个整数数组，它表示BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。
 * 
 * 保证 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。
 * 
 * 二叉搜索树 是一棵二叉树，其中每个节点， Node.left 的任何后代的值 严格小于 Node.val , Node.right 的任何后代的值
 * 严格大于 Node.val。
 * 
 * 二叉树的 前序遍历 首先显示节点的值，然后遍历Node.left，最后遍历Node.right。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：preorder = [8,5,1,7,10,12]
 * 输出：[8,5,10,1,7,null,12]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: preorder = [1,3]
 * 输出: [1,null,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= preorder.length <= 100
 * 1 <= preorder[i] <= 10^8
 * preorder 中的值 互不相同
 * 
 * 
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

function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const nodeVal = preorder.shift();
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  for (let v of preorder) {
    if (v > (nodeVal as number)) {
      rightArr.push(v)
    } else {
      leftArr.push(v)
    }
  }
  const left: TreeNode = bstFromPreorder(leftArr);
  const right: TreeNode = bstFromPreorder(rightArr)
  return new TreeNode(nodeVal, left, right);
};
// @lc code=end

