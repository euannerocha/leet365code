 class TreeNodeSecondSum {
     val: number
     left: TreeNodeSecondSum | null
     right: TreeNodeSecondSum | null
     constructor(val?: number, left?: TreeNodeSecondSum | null, right?: TreeNodeSecondSum | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function secondPathSum(root: TreeNodeSecondSum | null, targetSum: number): number {
    const prefixSum = new Map<number, number>();
    prefixSum.set(0, 1);

    function dfs(node: TreeNodeSecondSum | null, currSum: number): number {
        if (!node) return 0;

        currSum += node.val;
        let count = prefixSum.get(currSum - targetSum) || 0;

        prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1);

        count += dfs(node.left, currSum);
        count += dfs(node.right, currSum);

        prefixSum.set(currSum, prefixSum.get(currSum)! - 1);

        return count;
    }

    return dfs(root, 0);
}

// EXERCISE:

// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
 
// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000
