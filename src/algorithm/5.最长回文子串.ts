/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.46%)
 * Likes:    6331
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3.7M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */

// @lc code=start
function longestPalindrome(s: string): string {
  /*
   *两个要点：
   *1. 双指针从中心开始
   *2. 每个位置都可以当做中心 
   */
  const arr = s.split('');
  let res = ''; // 记录回文串的长度
  for (let mid = 0; mid < arr.length; mid++) {
    const s1 = palindrome(s, mid, mid);
    const s2 = palindrome(s, mid, mid+1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
  function palindrome(s, left, right): string {
    while(left>-1 && right<s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left+1, right);
  }
};
// @lc code=end

