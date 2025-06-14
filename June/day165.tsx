class TreeNodeSum {
    val: number;
    left: TreeNodeSum | null;
    right: TreeNodeSum | null;
    constructor(val?: number, left?: TreeNodeSum | null, right?: TreeNodeSum | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function pathSum(root: TreeNodeSum | null, targetSum: number): number {
    let count = 0;

    function dfs(node: TreeNodeSum | null, currentSum: number): void {
        if (!node) return;
        
        currentSum += node.val;
        
        if (currentSum === targetSum) {
            count++;
        }
        
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    }

    function findPaths(node: TreeNode | null): void {
        if (!node) return;
        
        dfs(node, 0);
        findPaths(node.left);
        findPaths(node.right);
    }

    findPaths(root);

    return count;
}
