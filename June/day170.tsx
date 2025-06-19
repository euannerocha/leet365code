class TreeNodeZigZag {
    val: number;
    left: TreeNodeZigZag | null;
    right: TreeNodeZigZag | null;
    constructor(val?: number, left?: TreeNodeZigZag | null, right?: TreeNodeZigZag | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function longestZigZag(root: TreeNodeZigZag | null): number {
    if (!root) return 0;
    
    let maxZigZag = 0;
    
    function dfs(node: TreeNodeZigZag | null, direction: string, length: number): void {
        if (!node) return;
        
        maxZigZag = Math.max(maxZigZag, length);
        
        if (direction === 'right') {
            dfs(node.left, 'left', length + 1);
            dfs(node.right, 'right', 1);
        } else {
            dfs(node.right, 'right', length + 1);
            dfs(node.left, 'left', 1);
        }
    }
    
    dfs(root.left, 'left', 1);
    dfs(root.right, 'right', 1);
    
    return maxZigZag;
}

// EXERCISE:

// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

// Example 1:

// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
// Example 2:

// Input: root = [1,1,1,null,1,null,null,1,1,null,1]
// Output: 4
// Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
// Example 3:

// Input: root = [1]
// Output: 0
 
// Constraints:

// The number of nodes in the tree is in the range [1, 5 * 104].
// 1 <= Node.val <= 100