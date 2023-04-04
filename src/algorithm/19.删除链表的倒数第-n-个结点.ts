/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (45.34%)
 * Likes:    2479
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p = head; 
  let p1 = head;
  const dummy = new ListNode(-1);
  let p2 = dummy;
  for(let i = 0; i<n; i++) {
    p = p.next;
  }
  while(p !== null) {
    p = p.next;
    p2.next = p1;
    p1 = p1.next; // n-k+1 节点
    p2 = p2.next;
  }
  p2.next = p1.next;
  return dummy.next;
};

// 方法二
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const dummy = new ListNode(-1);
//   dummy.next = head;
//   const node = findNodeFromEnd(dummy, n+1);
//   node.next = node.next.next;
//   return dummy.next;
// };

// function findNodeFromEnd(head: ListNode | null, k: number) : ListNode | null {
//   let p = head;
//   let p1 = head;
//   for(let i = 0; i < k; i++) {
//     p = p.next;
//   }
//   while(p !== null) {
//     p = p.next;
//     p1 = p1.next;
//   }
//   return p1;
// }
// @lc code=end

